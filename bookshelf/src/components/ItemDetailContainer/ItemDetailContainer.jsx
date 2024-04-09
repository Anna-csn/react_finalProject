import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
// import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer({ id }) {

    const [item, setItem] = useState(null);

    useEffect(() => {
        const getBooks = async () => {
            const result = [];
            // new Promise((resolve) => {
            //     setTimeout(() => {
            //         const mockedBooks = [
            //             {
            //                 id: 1,
            //                 title: "O Homem Que Escutava As Abelhas",
            //                 description: "Autora: Christy Lefteri",
            //                 price: 100.00,
            //                 pictureUrl: "https://static.stealthelook.com.br/wp-content/uploads/2021/11/esgotou-sua-lista-de-leitura-aqui-vai-5-livros-para-ler-antes-do-ano-acabar-o-homem-que-escutava-abelhas-20211104151051.jpg",
            //             },
            //             {
            //                 id: 2,
            //                 title: "O Mundo Se Despedaça",
            //                 description: "Autor: Chinua Achebe",
            //                 price: 200.00,
            //                 pictureUrl: "https://static.stealthelook.com.br/wp-content/uploads/2021/11/esgotou-sua-lista-de-leitura-aqui-vai-5-livros-para-ler-antes-do-ano-acabar-o-mundo-se-despedaca-20211104151155.jpg",
            //             },
            //             {
            //                 id: 3,
            //                 title: "A Casa do Silêncio",
            //                 description: "Autor: Orhan Pamuk",
            //                 price: 300.00,
            //                 pictureUrl: "https://static.stealthelook.com.br/wp-content/uploads/2021/11/esgotou-sua-lista-de-leitura-aqui-vai-5-livros-para-ler-antes-do-ano-acabar-a-casa-do-silencio-20211104150533.jpg",
            //             },
            //             {
            //                 id: 4,
            //                 title: "Sapiens: Uma breve história da humanidade",
            //                 description: "Autor: Yuval Harari",
            //                 price: 400.00,
            //                 pictureUrl: "https://static.todamateria.com.br/upload/sa/pi/sapiensumabrevehistoriadahumanidade-cke.jpg",
            //             }
            //         ];
            //         const selectedBook = mockedBooks.find(book => book.id === Number(id));
            //         setItem(selectedBook);
                    
            //     }, 2000);
            //     resolve(true);
            // });

            return result;
        };

        getBooks().then((result) => {
            console.log(result);
        });
    }, []);

    return (
        <>
            {item }
        </>
    );
}

export default ItemDetailContainer;