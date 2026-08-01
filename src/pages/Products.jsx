import { useEffect, useState } from 'react';
import axios from 'axios';
import './Products.css';

const API_URL = 'https://fakestoreapi.com/products';

export const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(API_URL)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error("Si è verificato un errore nel caricamento dei dati:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className="products-page">
            <h1>I nostri Prodotti</h1>
            <div className="products">
                {loading && (<div>Sto caricando...</div>)}
                {!loading && products.map(item => (
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
