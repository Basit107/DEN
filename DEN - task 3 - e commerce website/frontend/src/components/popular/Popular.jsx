import React, { useEffect, useState } from 'react'
import './popular.css'
// import data_product from '../assets/data';
import Item from '../item/Item';

const Popular = () => {

    const [popularProducts, setPopularProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/popularproducts')
        .then((response) => response.json())
        .then((data) =>  setPopularProducts(data))
    }, [])


    return (
        <div className='popular'>
            <h1>POPULAR</h1>
            <hr />
            <div className="popular-item">
                {popularProducts.map((item,i)=>{
                    return <Item className='item' key={i} id={item.id} name={item.name}  image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    );
}


export default Popular

