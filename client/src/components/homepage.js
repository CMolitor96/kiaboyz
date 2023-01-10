import React from 'react';
import { Link } from 'react-router-dom';



export default function Homepage() {

  const styles = {
    header: {
      width: '100%',
      height: '6rem',
      backgroundColor: 'black',
      textAlign: 'center',
      color: 'white',
      fontSize: '5rem',
    },
  };

  return (
    <div>
      <div className='container'>

        <div className='row'>
          <div className='col'>
            <header style={styles.header}>Check your kia</header>
          </div>
          <div className='col'>
            <p>put logo here</p>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <Link className='btn btn-primary button' to={`/search`}>Search for your car</Link>
          </div>
        </div>

      </div>

    </div>
  );
}