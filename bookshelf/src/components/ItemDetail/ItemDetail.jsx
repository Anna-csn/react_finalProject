import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './ItemDetail.css'
import ItemCount from './../ItemCount/ItemCount';
import { Button, Card } from 'react-bootstrap';

function ItemDetail({ item, theme = 'dark' }) {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
    item.price = formatter.format(item.price);

    return (
        <>
            <Card className='align-items-center' bg={theme} data-bs-theme={theme} style={{ width: '18rem' }}>
                <Card.Img className='Img' variant="top" src={item.pictureUrl} />
                <Card.Body>
                    <Card.Title>{`${item.title} - ${item.price}`}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Button variant={theme}>Comprar Agora</Button>
                    <ItemCount stock={5} initial={1} />
                </Card.Body>
            </Card>
        </>
    );
}

export default ItemDetail;