import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { searchCarImmobilizer } from '../../utils/API';

export default function CarImmobilizer() {
    const [carImmobilizer, setCarImmobilizer] = useState([]);

    const {make, model, year, trim, bodytype} = useParams();

    useEffect(() => {
        const getImmobilizerData = async () => {
            try {
                let response = await searchCarImmobilizer(make, model, year, trim, bodytype);
                setCarImmobilizer(response);
            } catch (err) {
                console.log(err);
            }
        };
        getImmobilizerData();
    }, [make, model, year, trim, bodytype]);

    // console.log(carImmobilizer[0]);

    return (
        <div>
            <p>{`Can your ${year} ${make} ${model} ${trim} with bodytype ${bodytype} get stolen?`}</p>
            {carImmobilizer.map((immobilizer) => {
                if (immobilizer.Immobilizer === 'TRUE') {
                    return (
                        <p key={immobilizer.Immobilizer}>You car is safe</p>
                    );
                } else if (immobilizer.Option_for_Immobilizer === 'TRUE') {
                    return (
                        <p key={immobilizer.Immobilizer}>Your car may be stolen</p>
                    )
                }
                return (
                    <p key={immobilizer.Immobilizer}>Your car gone get got</p>
                )
                    
            })}

            <Link key={bodytype} className='btn btn-primary button' to={`/`}>Return to home</Link>
            
            
        </div>
    )
}