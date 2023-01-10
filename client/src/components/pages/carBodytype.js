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
            <p>{`What Bodytype is your ${year} ${make} ${model} ${trim}?`}</p>
            {carBodytype.map(bodytype => {
                return (
                    <Link key={bodytype} className='btn btn-primary button' to={`/search/${make}/${model}/${year}/${trim}/${bodytype}`}>{bodytype}</Link>
                )
            })}
        </div>
    )
}