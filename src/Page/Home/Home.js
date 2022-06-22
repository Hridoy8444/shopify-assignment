import React from 'react';
import Banner from './Banner';
import Header from './Header';
import KidsShoes from './KidsShoes';
import Mens from './Mens';
import SecondBanner from './SecondBanner';
import Slider from './Slider';
import Sports from './Sports';
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
            <Mens></Mens>
            <Sports></Sports>
            <SecondBanner></SecondBanner>
        </div>
    );
};

export default Home;