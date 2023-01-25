import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { searchCarTrim } from '../../utils/API';

export default function CarTrim() {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 620;
    useEffect(() => {
        const handleWindow = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindow);
        return () => window.removeEventListener('resize', handleWindow);
    }, []);
    const [value, setValue] = useState('Choose');
    const handleValueChange = (event) => {
        setValue(event.target.value);
    }

    const [carTrim, setCarTrim] = useState([]);

    const { make, model, year } = useParams();

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

    if (width < breakpoint) {
        return (
            <div>
                <h2 style={{ textAlign: 'center', margin: '1rem' }}>{`What Trim Level is your ${year} ${make} ${model}?`}</h2>
                <div className='d-flex flex-row flex-wrap justify-content-center'>
                    <Link key={year} className='goose' style={{ margin: '1rem' }} to={`/search/${make}/${model}`}>Go Back to Year</Link>
                </div>
                <div className='row justify-content-center' style={{ textAlign: 'center' }}>
                    <div className='col' style={{ margin: '1rem' }}>
                        <select className="form-select" aria-label="Default select example" onChange={handleValueChange}>
                            <option value='Choose'>Choose your Trim</option>
                            {carTrim.map((car) => {
                                return (
                                    <option key={car} value={car}>{car}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                {value === 'Choose' ? (
                    <div></div>
                ) : (
                    <div className='d-flex flex-row flex-wrap justify-content-center'>
                        <Link className='goose' to={`/search/${make}/${model}/${year}/${value}`}>Next</Link>
                    </div>
                )
                }
            </div>
        )
    } else {
        return (
            <div>
                <h2 style={{ textAlign: 'center' }}>{`What trim level is your ${year} ${make} ${model}?`}</h2>
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

}