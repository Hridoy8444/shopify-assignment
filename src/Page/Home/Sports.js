import React, { useEffect, useState } from 'react';
import Sport from './Sport';

const Sports = () => {
    const [sports, setSports] = useState([])

    useEffect(() => {
        fetch('sports.json')
        .then(res => res.json())
        .then(data => setSports(data))
    }, []);

    return (
        <div>
            <div className='d-flex justify-content-between m-3'>
                <h5>Sports Shoes</h5>
                <button className='btn btn-danger'>VIEW ALL</button>
            </div>
            <div className='row container ms-5'>
                {
                    sports.map(sport => <Sport
                    key={sport.id}
                    sport={sport}
                    ></Sport>)
                }
            </div>
        </div>
    );
};

export default Sports;