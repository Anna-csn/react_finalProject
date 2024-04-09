import './ItemCount.css'
import React, { useEffect, useState } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

function ItemCount({ stock = 0, initial = 0, onAdd = () => { }, theme = 'dark' }) {

    const [itemCount, setItemCount] = useState(initial);

    useEffect(() => {
        if (initial < 0) {
            initial = 0;
        }
        if (stock < 0) {
            stock = 0;
        }
    }, []);

    const subtractItem = () => {
        if (itemCount >= initial && itemCount > 0) {
            setItemCount(itemCount - 1);
        }
    };

    const addItem = () => {
        if (itemCount < stock) {
            setItemCount(itemCount + 1);
        }
    };

    const isRangeValid = () => {
        return itemCount >= initial && itemCount <= stock;
    };

    const selectTheme = () => {
        if (theme === 'dark') {
            return 'bg-dark text-white border-dark';
        }
    }

    return (
        <>
            <InputGroup className='mb-3'>
                <Button variant={theme} onClick={subtractItem}>-</Button>
                <FormControl className={`Form-control No-spinners ${selectTheme()}`} type='number' value={itemCount} onChange={(e) => { isRangeValid() && setItemCount(e.target.value) }} max={stock} />
                <Button variant={theme} onClick={addItem}>+</Button>
                <Button variant={theme} disabled={!isRangeValid()} onClick={onAdd}>Adicionar ao Carrinho</Button>
            </InputGroup>
        </>
    );
}

export default ItemCount;