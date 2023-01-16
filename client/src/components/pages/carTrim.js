import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { searchCarTrim } from '../../utils/API';

export default function CarTrim() {
    const [carTrim, setCarTrim] = useState([]);

    const {make, model, year} = useParams();

    useEffect(() => {
        const getTrimData = async () => {
            try {
                let response = await searchCarTrim(make, model, year);
                setCarTrim(response);
            } catch (err) {
                console.log(err);
            }
        };
        getTrimData();
    }, [make, model, year]);
    // console.log(carTrim);

    return (
        <div>
            <h2 style={{textAlign: 'center'}}>{`What trim level is your ${year} ${make} ${model}?`}</h2>
            <div className='d-flex flex-row flex-wrap justify-content-center'>
                <Link key={year} className='goose' to={`/search/${make}/${model}`}>Go Back to Year</Link>
            </div>
            <div className='d-flex flex-row flex-wrap justify-content-center'>
            {carTrim.map((trim) => {
                return (
                    <Link key={trim} className='goose' to={`/search/${make}/${model}/${year}/${trim}`}>{trim}</Link>
                )
            })}
            </div>
        </div>
    );

}