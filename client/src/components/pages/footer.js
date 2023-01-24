import React from 'react';

export default function Footer() {
    const styles = {
        footer: {
            backgroundColor: 'black',
            color: 'white',
            textAlign: 'center',
            margin: '1rem'
        }
    }

    return (
        <div className='container'><br></br>
            <hr></hr>
            <section>
                <h3>Who are the KiaBoyz?</h3>
                <p>#Kiaboyz is a tiktok challenge that went viral in the summer of 
                    2022 where kids would post videos of themselves stealing Kias
                    and Hyundais and then joyride them around city streets. The cars targeted
                    are specifically Kias and Hyundais from 2011 - 2021 because these cars
                    do not include engine immobilizers, making the 
                    theft of said cars extremely easy. The theft of Kias and Hyundais in some areas
                    expoloded over 1000% in a matter of weeks, with very little response from either
                    car company about the decision to remove these vital safety features, or how they 
                    plan to rectiy the growing number of thefts. Although Kia and Hyundai have declined
                    to say which cars are affected, this website was created by manually going through all
                    car manuals for all Kias and Hyundais in the past 12 years and noting whether or not they 
                    come equipped with an eninge immobilizer. For more information on the Kiaboyz, please watch
                    the documentary made by Youtuber Tommy G linked below. This website was a passion 
                    project as a fellow affected Hyundai owner, please see the legal disclaimer for 
                    more information. 
                </p>
                <div className='d-flex row justify-content-center' style={{height: '20rem'}}>
                    <iframe className='col-10' allow='fullscreen' src="https://www.youtube.com/embed/fbTrLyqL_nw" title="Kiaboyz Documentary"></iframe>
                </div>
                
            </section>
            <hr></hr>
            <footer style={styles.footer}>This is a footer</footer>
        </div>
    );
}