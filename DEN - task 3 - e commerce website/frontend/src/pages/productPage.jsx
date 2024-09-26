import React, { useContext } from 'react'
import { HomeContext } from '../context/HomeContext'
// import all_products from '../components/assets/all_product'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';

const ProductPage = () => {
    const {all_product} = useContext(HomeContext)
    const{productId} = useParams();
    const product = all_product.find((e)=> e.id === Number(productId));  

    return (
        <div>
            <Breadcrumbs product={product} />
        </div>
    )
}

export default ProductPage