import axios from 'axios';
import './Details.css';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const Details = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                if (!response.data) {
                    navigate('/products', { replace: true });
                } else {
                    setProduct(response.data);
                }
            })
            .catch(error => {
                console.error("Errore nel recuperare il dettaglio:", error);
                navigate('/products', { replace: true });
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id, navigate]);

    const productId = Number(id);

    const handlePrev = () => {
        if (productId > 1) {
            navigate(`/products/${productId - 1}`);
        };
    };

    const handleNext = () => {
        navigate(`/products/${productId + 1}`);
    };

    const handleBackToList = () => {
        navigate('/products');
    };

    if (loading) {
        return (
            <div className="loading-details">Sto caricando...</div>
        );
    };

    if (!product) {
        return null;
    };

    return (
        <div className="details-page">
            <div className="product-detail">
                <img src={product.image} alt={product.title} />
                <h2>{product.title}</h2>
                <p className="category">{product.category}</p>
                <p className="description">{product.description}</p>
                <h3>€{product.price}</h3>
            </div>

            <div className="navigation-buttons">
                <button type="button"
                    onClick={handlePrev}
                    disabled={productId <= 1}
                >
                    &laquo; Prodotto Precedente
                </button>
                <button type="button"
                    onClick={handleNext}
                >
                    Prodotto Successivo &raquo;
                </button>
            </div>
        </div>
    );
};