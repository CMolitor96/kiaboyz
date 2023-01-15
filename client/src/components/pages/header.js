import React from 'react';

export default function Header() {
    const styles = {
        check: {
            textAlign: 'center',
            color: 'black',
            fontSize: '4rem',
            fontFamily: 'Work Sans',
            fontWeight: '900',
            margin: '-1rem',
            position: 'relative',
            right: '1rem',
            marginTop: '.5rem'
        },
        yo: {
            textAlign: 'center',
            color: 'black',
            fontSize: '4rem',
            fontFamily: 'Work Sans',
            fontWeight: '900',
            margin: '-1rem',
            position: 'relative',
        },
        kia: {
            textAlign: 'center',
            color: 'black',
            fontSize: '4rem',
            fontFamily: 'Work Sans',
            fontWeight: '900',
            margin: '-1rem',
            position: 'relative',
            left: '3rem',
            bottom: '.75rem'
        },
        container: {
            backgroundColor: 'blue'
        }
    };

    return (
        <div className='container' style={styles.container}>
            <div className='d-flex flex-row justify-content-center'>
                <div className='col'>
                    <h3 style={styles.check}>Check</h3>
                </div>
            </div>
            <div className='flex-row justify-content-center'>
                <div className='col'>
                    <h3 style={styles.yo}>Yo</h3>
                </div>
            </div>
            <div className='flex-row justify-content-center'>
                <div className='col'>
                    <h3 style={styles.kia}>Kia</h3>
                </div>
            </div>
        </div>
    )
}