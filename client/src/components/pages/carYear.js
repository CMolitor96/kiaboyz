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
            <div>{`What Year is your ${make} ${model}?`}</div>
            {carYear.map((year) => {
                return (
                    <Link key={year} className = 'btn btn-primary button' to={`/search/${make}/${model}/${year}`}>{year}</Link>
                )
            })}
        </div>
    );
};