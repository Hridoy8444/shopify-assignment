import React, { useEffect, useState } from 'react';
import KidShoe from './KidShoe';

const KidsShoes = () => {
    const [kidShoes, setKidShoes] = useState([]);

    useEffect(() => {
        fetch('Kids.json')
            .then(res => res.json())
            .then(data => setKidShoes(data))
    }, [])
    return (
        <div>
            <div className='d-flex justify-content-between m-3'>
                <h5>Kids Shoes</h5>
                <button className='btn btn-danger'>VIEW ALL</button>

            </div>
            <div className='row container ms-5'>
                {
                    kidShoes.map(kidShoe => <KidShoe
                        key={kidShoe.id}
                        kidShoe={kidShoe}
                    ></KidShoe>)
                }

            </div>
        </div>
    );
};

export default KidsShoes;