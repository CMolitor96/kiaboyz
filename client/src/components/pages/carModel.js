import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { carMake } from '../../utils/API';

export default function CarModel() {
    const [make, setMake] = useState([]);

    const {model} = useParams();

    useEffect(() => {
        const getMakeData = async () => {
            try {
                let response = await carMake(model);
                setMake(response.sort());
            } catch (err) {
                console.log(err)
            }
        };
        getMakeData();
    }, [model]);

    // console.log(make);
    

    return (
        <div>
            <div>{`this is the dropdown for the carModel ${model}`}</div>
            {make.map((car) => {
                return (
                    <p key={car}>{car}</p>
                )
            })}
        </div>
    );
}