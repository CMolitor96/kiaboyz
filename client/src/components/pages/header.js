import React from 'react';

export default function Header() {
    const styles = {
        header: {
            width: '100%',
            height: '6rem',
            backgroundColor: 'black',
            textAlign: 'center',
            color: 'white',
            fontSize: '5rem',
            display: 'flex',
            justifyContent: 'center'
        },
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <header style={styles.header}>Check your kia</header>
                </div>
                <div className='col'>
                    <p>put logo here</p>
                </div>
            </div>
        </div>
    )
}