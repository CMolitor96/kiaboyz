import React from 'react';
import { Link } from 'react-router-dom';



export default function Homepage() {



  return (
    <div>
      <div className='container'>

        <div className='row'>
          <div className='col'>
            <Link className='btn btn-primary button' to={`/search`}>Search for your car</Link>
          </div>
        </div>

      </div>

    </div>
  );
}