import React from 'react';

export default function Footer() {
    const styles = {
        footer: {
            width: '100%',
            height: '2rem',
            backgroundColor: 'blue',
            color: 'white',
            textAlign: 'center',
        }
    }

    return (
        <div className='container'>
            <footer style={styles.footer}>This is a footer</footer>
        </div>
    );
}