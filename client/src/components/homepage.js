import React from 'react';
import { useParams } from 'react-router-dom'
// import Dropdown from 'react-bootstrap/Dropdown';
// import CarModel from './pages/carModel';


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

  const Params = () => {
    let { goose } = useParams();
    console.log(goose);
  }
  
  


  return (
    <div>
      {Params}
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
            <label> What kind of car do you have?
              <select className="form-select">
                <option></option>
                <option>Hyundai</option>
                <option>Kia</option>
              </select>
            </label>
          </div>
          

        </div>
        

      </div>
      {/* {<CarModel />} */}

    </div>
  );
}