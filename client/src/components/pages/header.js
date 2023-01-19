import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.jpg';


export default function Header() {
    const styles = {
        check: {
            marginLeft: '.5rem',
            fontSize: '5rem',
            fontFamily: 'Work Sans',
            fontWeight: '900'
        },
        yo: {
            fontSize: '5rem',
            padding: '0rem',
            fontFamily: 'Work Sans',
        },
        kia: {
            marginRight: '.5rem',
            fontSize: '5rem'
        },
        img: {
            maxWidth: '20rem',
            height: 'auto',
            marginBottom: '-1.5rem'
        }
    };

// function homeButton() {
//     window.location.replace='/';
// }

return (
    <div className='container'>
        <div className='d-flex flex-row justify-content-center'>
            <Link to={`/`}>
                {/* <div className='row'>
                    <h3 className='col' style={styles.check}>Check</h3>
                </div>
                <div className='row' style={{ textAlign: 'center' }}>
                    <h3 className='col' style={styles.yo}>Yo</h3>
                </div>
                <div className='row' style={{ textAlign: 'end' }}>
                    <h3 className='col' style={styles.kia}>Kia!</h3>
                </div> */}
                <img style={styles.img}src={Logo} alt='Check Yo Kia in bold font logo'></img> 
            </Link>
        </div>
    </div>
)
}