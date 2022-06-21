import React from 'react';
import Banner from './Banner';
import Header from './Header';
import KidsShoes from './KidsShoes';
import Slider from './Slider';
import Womens from './Womens';

const Home = () => {
    return (
        <div>
            <h1>FREE SHIPPING ON PAID ORDERS ABOVE ₹999</h1>
            <Header></Header>
            <Banner></Banner>
            <Slider></Slider>
            <KidsShoes></KidsShoes>
            <Womens></Womens>
        </div>
    );
};

export default Home;