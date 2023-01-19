import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
    const styles = {
        container: {
            backgroundColor: 'blue'
        },
        box: {
            border: '2px solid black',
            margin: '1rem',
            textDecoration: 'none',
            color: 'black',
            fontFamily: 'Work Sans'
        },
        check: {
            marginLeft: '.5rem',
            fontSize: '5rem',
        },
        yo: {
            fontSize: '5rem',
            padding: '0rem'
        },
        kia: {
            marginRight: '.5rem',
            fontSize: '5rem'
        }
    };

    // function homeButton() {
    //     window.location.replace='/';
    // }

    return (
        <div className='container' style={styles.container}>
            <div className='d-flex flex-row justify-content-center'>
                <Link className='col-6' style={styles.box} to={`/`}>
                    <div className='row'>
                        <h3 className='col' style={styles.check}>Check</h3>
                    </div>
                    <div className='row' style={{textAlign: 'center'}}>
                            <h3 className='col' style={styles.yo}>Yo</h3>
                    </div>
                    <div className='row' style={{textAlign: 'end'}}>
                        <h3 className='col' style={styles.kia}>Kia!</h3>
                    </div>
                </Link>
            </div>
        </div>
    )
}