import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { searchCarMake } from '../../utils/API';

export default function CarModel() {
    const [carModel, setCarModel] = useState([]);

    const {make} = useParams();

    useEffect(() => {
        const getMakeData = async () => {
            try {
                let response = await searchCarMake(make);
                setCarModel(response.sort());
            } catch (err) {
                console.log(err)
            }
        };
        getMakeData();
    }, [make]);

    // console.log(make);
    

    return (
        <div>
            <h2 style={{textAlign: 'center', margin: '1rem'}}>{`What model is your ${make}?`}</h2>
            <div className='d-flex flex-row flex-wrap justify-content-center'>
                
                    {carModel.map((car) => {
                        return (
                            
                                <Link key={car} className = 'goose' to={`/search/${make}/${car}`}>{car}</Link>
                            
                        )
                    })}
            </div>
        </div>
    );
}