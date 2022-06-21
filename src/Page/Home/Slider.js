import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner';
import menShoes from '../../image/men-shoes.jpg';

const Slider = () => {
    return (
        <div className='row m-5'>
            <div className='col-2 img-container ' >
                <img className='border rounded-circle' width={150} src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3ad58505756642b9b5adad7b00cc45dc_9366/adidas_x_Kevin_Lyons_Superstar_360_Shoes_Pink_GW3308_01_standard.jpg" alt="" />
                <p className='mt-2'>ADIDAS X KEVIN LYONS</p>
            </div>
            <div className='col-2 img-container'>
                <img className='border rounded-circle'   width={150}  src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a10af08cfc6949a0903aaddb011f6eec_9366/Disney_Superstar_360_Shoes_Pink_GX3299_01_standard.jpg" alt="" />
                <p className='mt-2'>DISNEY SUPERSTAR</p>
            </div>
            <div  className='col-2 img-container'>
                <img className='border rounded-circle'  width={150} src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/90c9778ab13b4f429134ad67010ce37a_9366/Disney_Superstar_360_Shoes_White_GX3279_01_standard.jpg" alt="" />
                <p className='mt-2'>DISNEY SUPERSTAR 360</p>
            </div>
            <div className='col-2 img-container'>
                <img className='border rounded-circle'  width={150} src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/763aac638a2e4c68964eadfd00d75936_9366/adidas_4D_FWD_x_Parley_Shoes_White_GZ8625_01_standard.jpg" alt="" />
                <p className='mt-2'>ADIDAS 4D FWD</p>
            </div>
            <div className='col-2 img-container'>
                <img className='border rounded-circle'  width={150} src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8636ee2b569e461db43bae0b00e3caa6_9366/NMD_V3_Shoes_Black_GW3064_01_standard.jpg" alt="" />
                <p className='mt-2'>4DFWD PULSE SHOES</p>
            </div>
            <div className='col-2 img-container'>
                <img className='border rounded-circle'  width={150} src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b174bd7c569847f8b42dadee014665f3_9366/NMD_V3_Shoes_White_GX3379_01_standard.jpg" alt="" />
                <p className='mt-2'>ULTRABOOST 21</p>
            </div>
        </div>
    );
};

export default Slider;