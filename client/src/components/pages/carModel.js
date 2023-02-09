import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { searchCarMake } from '../../utils/API';

export default function CarModel() {

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

    const [carModel, setCarModel] = useState([]);

    const {make} = useParams();

    useEffect(() => {
        const getMakeData = async () => {
            try {
                let response = await searchCarMake(make);
                setCarModel(response.sort());
            } catch (err) {
                console.error(err)
            }
        };
        getMakeData();
    }, [make]);    
    if (width < breakpoint) {
        return (
            <div>
                <h2 style={{textAlign: 'center', margin: '1rem'}}>{`What model is your ${make}?`}</h2>
                <div className='d-flex flex-row flex-wrap justify-content-center'>
                    <Link key={make} className='retreat' style={{margin: '1rem'}} to={`/search`}>Go Back to Make</Link>
                </div>
                <div className='row justify-content-center' style={{ textAlign: 'center' }}>
                    <div className='col' style={{margin: '1rem'}}>
                        <select className="form-select" aria-label="Default select example" onChange={handleValueChange}>
                            <option value='Choose'>Choose your Model</option>
                            {carModel.map((car) => {
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
                                <Link className='goose' to={`/search/${make}/${value}`}>Next</Link>
                        </div>
                    )
                }
            </div>
        )
    } else {
        return (
            <div>
                <h2 style={{textAlign: 'center', margin: '1rem'}}>{`What model is your ${make}?`}</h2>
                <div className='d-flex flex-row flex-wrap justify-content-center'>
                    <Link key={make} className='retreat' to={`/search`}>Go Back to Make</Link>
                </div>
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
}