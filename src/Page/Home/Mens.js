import React, { useEffect, useState } from 'react';
import Men from './Men';

const Mens = () => {
    const [mens, setMens] = useState([]);

    useEffect(() => {
        fetch('mens.json')
        .then(res => res.json())
        .then(data => setMens(data))
    }, []);

    return (
        <div>
            <div className='d-flex justify-content-between m-3'>
                <h5>Mens Shoes</h5>
                <button className='btn btn-danger'>VIEW ALL</button>
            </div>
            <div className='row container ms-5'>
                {
                    mens.map(men => <Men
                    key={men.id}
                    men={men}
                    ></Men>)
                }
            </div>
        </div>
    );
};

export default Mens;