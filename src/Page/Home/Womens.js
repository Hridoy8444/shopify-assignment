import React, { useEffect, useState } from 'react';
import Women from './Women';

const Womens = () => {
    const [womens, setWomens] = useState([]);

    useEffect(() => {
        fetch('Womens.json')
        .then(res => res.json())
        .then(data => setWomens(data))
    }, []);

    return (
        <div>
            <div className='d-flex justify-content-between m-3'>
                <h5>Womens Shoes</h5>
                <button className='btn btn-danger'>VIEW ALL</button>

            </div>
            <div className='row container ms-5'>
                {
                    womens.map(women => <Women
                    key={women.id}
                    women={women}
                    ></Women>)
                }

            </div>
        </div>
    );
};

export default Womens;