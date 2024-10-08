import React from 'react';
import Exclusive from '../components/exclusive/Exclusive';
import Popular from '../components/popular/Popular';
import Offers from '../components/offers/Offers';
import NewProducts from '../components/newProducts/NewProducts';

const Home = () => {
    return (
        <div>
            <Exclusive />
            <Popular />
            <Offers />
            <NewProducts />
        </div>
    );
}

export default Home;
