import React from 'react';
import { Link } from 'react-router-dom';


export default function CarMake() {


    return (
        <div>
            <div>What kind of car do you have?</div>
            <Link className = 'btn btn-primary button' to={`/search/Hyundai`}>Hyundai</Link>
            <Link className = 'btn btn-primary button' to={`/search/Kia`}>Kia</Link>
        </div>
    );
}