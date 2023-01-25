import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { searchCarYear } from '../../utils/API';
export default function CarYear() {

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

    const [carYear, setCarYear] = useState([]);

    const { make, model } = useParams();

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

    if (width < breakpoint) {
        return (
            <div>
                <h2 style={{ textAlign: 'center', margin: '1rem' }}>{`What Year is your ${make} ${model}?`}</h2>
                <div className='d-flex flex-row flex-wrap justify-content-center'>
                    <Link key={model} className='goose' style={{ margin: '1rem' }} to={`/search/${make}`}>Go Back to Model</Link>
                </div>
                <div className='row justify-content-center' style={{ textAlign: 'center' }}>
                    <div className='col' style={{ margin: '1rem' }}>
                        <select className="form-select" aria-label="Default select example" onChange={handleValueChange}>
                            <option value='Choose'>Choose your Year</option>
                            {carYear.map((car) => {
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
                        <Link className='goose' to={`/search/${make}/${model}/${value}`}>Next</Link>
                    </div>
                )
                }
            </div>
        )
    } else {
        return (
            <div>
                <h2 style={{ textAlign: 'center' }}>{`What Year is your ${make} ${model}?`}</h2>
                <div className='d-flex flex-row flex-wrap justify-content-center'>
                    <Link key={model} className='goose' to={`/search/${make}`}>Go Back to Model</Link>
                </div>
                <div className='d-flex flex-row flex-wrap justify-content-center'>
                    {carYear.map((year) => {
                        return (
                            <Link key={year} className='goose' to={`/search/${make}/${model}/${year}`}>{year}</Link>
                        )
                    })}
                </div>
            </div>
        );
    }
};