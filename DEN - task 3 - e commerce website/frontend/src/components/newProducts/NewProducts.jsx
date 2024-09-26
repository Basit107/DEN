import React from "react";
import './newProducts.css'
import new_collections from "../assets/new_collections";
import Item from "../item/Item";

const NewProducts = () => {
    return (
        <div className="new-products">
            <h1>NEW PRODUCTS</h1>
            <hr />
            <div className="products">
                {new_collections.map((item, i)=> {
                    return <Item key={i} id={item.id} name={item.name}  image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default NewProducts