import React, { useState, useEffect } from 'react';
import './Popular.scss';
import Item from '~/Components/Item/Item';

const Popular = () => {
    const [popularProducts, setPopularProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/poppularinwomen')
            .then((res) => res.json())
            .then((data) => {
                setPopularProducts(data);
            });
    }, []);
    return (
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {popularProducts.map((item, index) => {
                    return <Item key={index} data={item} />;
                })}
            </div>
        </div>
    );
};

export default Popular;
