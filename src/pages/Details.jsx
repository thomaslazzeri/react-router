import axios from 'axios';
import './Details.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Details = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error("Errore nel recuperare il dettaglio:", error);
            });
    }, [id]);

    if (!product) return (
        <div className="ErrorDetails">
            <h2>NON HA FUNZIONATO</h2>
        </div>
    );


    return (
        <div className="details-page">
            <div className="product-detail">
                <img src={product.image} alt={product.title} />
                <h2>{product.title}</h2>
                <p className="category">{product.category}</p>
                <p className="description">{product.description}</p>
                <h3>€{product.price}</h3>
            </div>
        </div>
    );
};