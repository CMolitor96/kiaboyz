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

return (
    <div className='container'>
        <div className='d-flex flex-row justify-content-center'>
            <Link to={`/`}>
                <img style={styles.img}src={Logo} alt='Check Yo Kia in bold font logo'></img> 
            </Link>
        </div>
    </div>
)
}