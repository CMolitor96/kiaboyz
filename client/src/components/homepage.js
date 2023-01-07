import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import carModel from './pages/carModel';
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

  }
  return (
    <div>
      <div className='container'>

        <div className='row'>
          <div className='col'>
            <header style={styles.header}>Check yo kia</header>
          </div>
          <div className='col'>
            <p>put logo here</p>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Choose your car
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Hyundai</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Kia</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

      </div>
      {<carModel />}

    </div>
  );
}