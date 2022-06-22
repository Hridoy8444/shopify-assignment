import React from 'react';
import './Bnnaer.css';

const Sport = ({sport}) => {
    const {img, name, price} = sport;
    return (
        <div className='col-12 col-md-2'>
            <div class="card " style={{ width: '11rem' }}>
                <img class="card-img-top" src={img} alt="Card image cap" />
                <div class="card-body">
                    <h6 class="card-title">{name}</h6>
                    <p>Price: {price}₹</p>
                    <a href="#" class="btn btn-danger">ADD To CHART</a>
                </div>
            </div>
        </div>
    );
};

export default Sport;