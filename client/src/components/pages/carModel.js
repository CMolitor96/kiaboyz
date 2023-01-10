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
            <div>{`What model is your ${make}?`}</div>
            {carModel.map((car) => {
                return (
                    <Link key={car} className = 'btn btn-primary button' to={`/search/${make}/${car}`}>{car}</Link>
                )
            })}
        </div>
    );
}