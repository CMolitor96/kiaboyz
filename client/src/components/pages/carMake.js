import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/button.css'

export default function CarMake() {



    return (
        <div className='container'>
            <div className='row justify-content-center' style={{margin: '1rem', textAlign: 'center'}}>
                <h2 className='col'>
                    What kind of car do you have?
                </h2>
            </div>
            <div className='row justify-content-center' style={{textAlign: 'center'}}>
                <div className='col'>
                    <Link className = 'goose' to={`/search/Hyundai`}>Hyundai</Link>
                    <Link className = 'goose' to={`/search/Kia`}>Kia</Link>
                </div>
            </div>
        </div>
    );
}