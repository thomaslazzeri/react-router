import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

export const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(API_URL)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error("Si è verificato un errore nel caricamento dei dati:", error);
            });
    }, []);

    return (
        <div className="products-page">
            <h1>I nostri Prodotti</h1>
            <div className="products">
                {products.map(item => (
                    <div key={item.id} className="product-card">
                        <img src={item.image} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>€{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
