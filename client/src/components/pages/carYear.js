import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { searchCarYear } from '../../utils/API';
export default function CarYear() {
    const [carYear, setCarYear] = useState([]);

    const {make, model} = useParams();

    useEffect(() => {
        const getYearData = async () => {
            try {
                let response = await searchCarYear(make, model);
                setCarYear(response.sort());
            } catch (err) {
                console.log(err)
            }
        };
        getYearData();
    }, [make, model]);
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>{`What Year is your ${make} ${model}?`}</h2>
            <div className='d-flex flex-row flex-wrap justify-content-center'>
            {carYear.map((year) => {
                return (
                    <Link key={year} className = 'goose' to={`/search/${make}/${model}/${year}`}>{year}</Link>
                )
            })}
            </div>
        </div>
    );
};