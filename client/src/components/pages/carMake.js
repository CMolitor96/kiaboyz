import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/button.css'

export default function CarMake() {

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
    if (width < breakpoint) {
        return (
            <div className='container'>
                <div className='row justify-content-center' style={{ margin: '1rem', textAlign: 'center' }}>
                    <h2 className='col'>
                        What kind of car do you have?
                    </h2>
                </div>
                <div className='row justify-content-center' style={{ textAlign: 'center' }}>
                    <div className='col'>
                        <select className="form-select" aria-label="Default select example" onChange={handleValueChange}>
                            <option value='Choose'>Choose your Make</option>
                            <option value="Hyundai">Hyundai</option>
                            <option value="Kia">Kia</option>
                        </select>
                    </div>
                </div>
                {value === 'Choose'? (
                    <div></div>
                    ) : (
                        <div className='d-flex flex-row flex-wrap justify-content-center' style={{margin: '.5rem'}}>
                                <Link className='goose' to={`/search/${value}`}>Next</Link>                            
                        </div>
                    )
                }
            </div>
        )
    } else {
        return (
            <div className='container'>
                <div className='row justify-content-center' style={{ margin: '1rem', textAlign: 'center' }}>
                    <h2 className='col'>
                        What kind of car do you have?
                    </h2>
                </div>
                <div className='row justify-content-center' style={{ textAlign: 'center' }}>
                    <div className='col'>
                        <Link className='goose' to={`/search/Hyundai`}>Hyundai</Link>
                        <Link className='goose' to={`/search/Kia`}>Kia</Link>
                    </div>
                </div>
            </div>
        );
    }
}