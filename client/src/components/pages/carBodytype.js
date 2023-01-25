import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { searchCarBodytype } from '../../utils/API';

export default function CarBodytype() {

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

    const [carBodytype, setCarBodytype] = useState([]);

    const {make, model, year, trim} = useParams();
    
    useEffect(() => {
        const getBodytypeData = async () => {
            try {
                let response = await searchCarBodytype(make, model, year, trim);
                setCarBodytype(response.sort());
            } catch (err) {
                console.log(err);
            }
        };
        getBodytypeData();
    }, [make, model, year, trim]);

    if (width < breakpoint) {
        return (
            <div>
                <h2 style={{ textAlign: 'center', margin: '1rem' }}>{`What Bodytype is your ${year} ${make} ${model} ${trim}?`}</h2>
                <div className='d-flex flex-row flex-wrap justify-content-center'>
                    <Link key={trim} className='btn btn-primary button' style={{ margin: '1rem' }} to={`/search/${make}/${model}/${year}`}>Go Back to Trim</Link>
                </div>
                <div className='row justify-content-center' style={{ textAlign: 'center' }}>
                    <div className='col' style={{ margin: '1rem' }}>
                        <select className="form-select" aria-label="Default select example" onChange={handleValueChange}>
                            <option value='Choose'>Choose your Bodytype</option>
                            {carBodytype.map((car) => {
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
                        <Link className='goose' to={`/search/${make}/${model}/${year}/${trim}/${value}`}>Next</Link>
                    </div>
                )
                }
            </div>
        )
    } else {

        return (
            <div>
                <h2 style={{textAlign: 'center'}}>{`What Bodytype is your ${year} ${make} ${model} ${trim}?`}</h2>
                <div className='d-flex flex-row flex-wrap justify-content-center'>
                <Link key={trim} className='goose' to={`/search/${make}/${model}/${year}`}>Go Back to Trim</Link>
                </div>
                <div className='d-flex flex-row flex-wrap justify-content-center'>
                {carBodytype.map(bodytype => {
                    return (
                        <Link key={bodytype} className='goose' to={`/search/${make}/${model}/${year}/${trim}/${bodytype}`}>{bodytype}</Link>
                    )
                })}
                </div>
            </div>
        );
    }
}