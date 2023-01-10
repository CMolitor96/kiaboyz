import React from 'react';
import { Link } from 'react-router-dom';


export default function CarMake() {


    return (
        <div>
            <div>This is the first page to pick Hyundai or Kia</div>
            <Link className = 'btn btn-primary button' to={`/search/Hyundai`}>Hyundai</Link>
            <Link className = 'btn btn-primary button' to={`/search/Kia`}>Kia</Link>
        </div>
    );
}