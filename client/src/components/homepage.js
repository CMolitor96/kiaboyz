import React from 'react';
import { Link } from 'react-router-dom';
import Kiaboyz from '../assets/kiaboyz.jpeg';

export default function Homepage() {

  const styles = {
    img: {
      border: '2px solid black',
      boxShadow: '5px 10px  10px#888888',
      padding: '0rem',
      borderRadius: '2rem',
    },
  };

  return (
    <div>
      <div className='container'>

        <div className='row' style={{textAlign: 'center', margin: '1rem'}}>
          <div className='col'>
            <Link className='goose' to={`/search`} style={{fontFamily: 'Work Sans', fontWeight: '900', fontStyle: 'normal'}}>Search for your car</Link>
          </div>
        </div>
        <div className='row' style={{margin: '1rem'}}>
          <img style={styles.img} src={Kiaboyz} alt='Kids stealing a Kia with caption, find out if your kia or hyundai can get jacked'></img>
        </div>

      </div>

    </div>
  );
}