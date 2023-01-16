import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { searchCarBodytype } from '../../utils/API';

export default function CarBodytype() {
    const [carBodytype, setCarBodytype] = useState([]);

    const {make, model, year, trim} = useParams();
    
    useEffect(() => {
        const getBodytypeData = async () => {
            try {
                let response = await searchCarBodytype(make, model, year, trim);
                setCarBodytype(response.sort());
            } catch (err) {
                console.log(err);
            }
        };
        getBodytypeData();
    }, [make, model, year, trim]);

    return (
        <div>
            <h2 style={{textAlign: 'center'}}>{`What Bodytype is your ${year} ${make} ${model} ${trim}?`}</h2>
            <div className='d-flex flex-row flex-wrap justify-content-center'>
            <Link key={trim} className='goose' to={`/search/${make}/${model}/${year}`}>Go Back to Trim</Link>
            </div>
            <div className='d-flex flex-row flex-wrap justify-content-center'>
            {carBodytype.map(bodytype => {
                return (
                    <Link key={bodytype} className='goose' to={`/search/${make}/${model}/${year}/${trim}/${bodytype}`}>{bodytype}</Link>
                )
            })}
            </div>
        </div>
    )
}