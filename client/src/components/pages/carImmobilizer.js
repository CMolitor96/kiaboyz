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
            <h2 style={{textAlign: 'center'}}>{`Can your ${year} ${make} ${model} ${trim} with bodytype ${bodytype} get stolen?`}</h2>
            <div className='d-flex flex-row flex-wrap justify-content-center'>
            {carImmobilizer.map((car) => {
                if (car.Immobilizer === 'TRUE') {
                    return (
                        <p key={car.Immobilizer}>You car is safe</p>
                    );
                } else if (car.Option_for_Immobilizer === 'TRUE') {
                    return (
                        <p key={car.Immobilizer}>Your car may be stolen</p>
                    )
                }
                return (
                    <p key={car.Immobilizer}>Your car gone get got</p>
                )
                    
            })}
            <div className='d-flex flex-row flex-wrap justify-content-center'>
                <Link key={trim} className='goose' to={`/search/${make}/${model}/${year}/${trim}`}>Go Back to Bodytype</Link>
            <Link key={bodytype} className='goose' to={`/`}>Return to home</Link>

            </div>
            </div>
            
        </div>
    )
}