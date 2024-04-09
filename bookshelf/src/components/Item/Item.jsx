import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Item.css'
import ItemCount from './../ItemCount/ItemCount';
import { Button, Card } from 'react-bootstrap';

function Item({ id, title, description, price, pictureUrl, theme = 'dark' }) {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
    price = formatter.format(price);

    return (
        <>
            <Card className='align-items-center' bg={theme} data-bs-theme={theme} style={{ width: '18rem' }}>
                <Card.Img className='Img' variant="top" src={pictureUrl} />
                <Card.Body>
                    <Card.Title>{`${title} - ${price}`}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Button variant={theme}>Ver Detalhes</Button>
                    <ItemCount stock={5} initial={1} />
                </Card.Body>
            </Card>
        </>
    );
}

export default Item;