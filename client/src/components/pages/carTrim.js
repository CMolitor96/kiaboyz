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
            <div>{`What trim level is your ${make} ${model} ${year}?`}</div>
            {carTrim.map((trim) => {
                return (
                    <Link key={trim} className='btn btn-primary button' to={`/search/${make}/${model}/${year}/${trim}`}>{trim}</Link>
                )
            })}
        </div>
    );

}