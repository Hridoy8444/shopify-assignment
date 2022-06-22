import React from 'react';
import './Bnnaer.css';
import Banner from '../../image/Second-banner.jpg';

const SecondBanner = () => {
    return (
        <div className='second-banner mt-3'>
            <img  src={Banner} alt="" />
            <button className='btn btn-success'>SHOP NOW</button>
        </div>
    );
};

export default SecondBanner;