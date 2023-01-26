import React from 'react';
import Logo from '../../assets/logo.jpg';


export default function Footer() {
    const styles = {
        logo: {
            height: '4rem',
            width: 'auto'
        }
    }

    return (
        <div className='container'><br></br>
            <hr></hr>
            <section>
                <h3>Who are the KiaBoyz?</h3>
                <p>#Kiaboyz is a TikTok challenge that went viral in the summer of 
                    2022 where kids would post videos of themselves stealing Kias
                    and Hyundais and then joyride them around city streets. The cars targeted
                    are specifically Kias and Hyundais from 2011 - 2021 because these cars
                    do not include engine immobilizers, making the 
                    theft of said cars extremely easy. The theft of Kias and Hyundais in some areas
                    exploded over 1000% in a matter of weeks, with very little response from either
                    car company about the decision to remove these vital safety features, or how they 
                    plan to rectify the growing number of thefts. Although Kia and Hyundai have declined
                    to say which cars are affected, this website was created by manually going through all
                    car manuals for all Kias and Hyundais in the past 12 years and noting whether or not they 
                    come equipped with an engine immobilizer. For more information on the KiaBoyz, please watch
                    the documentary made by Youtuber Tommy G linked below. This website was a passion 
                    project as a fellow affected Hyundai owner, please see the legal disclaimer for 
                    more information. 
                </p>
                <div className='d-flex row justify-content-center' style={{height: '20rem', width: 'auto'}}>
                    <iframe className='col-10' allow='fullscreen' src="https://www.youtube.com/embed/fbTrLyqL_nw" title="Kiaboyz Documentary"></iframe>
                </div>
                
            </section>
            <hr></hr>
            <footer>
                <div className='d-flex flex-row flex-wrap justify-content-center'>
                    <div className='col' style={{textAlign: 'center'}}>
                        <img style={styles.logo} src={Logo} alt="Kiaboyz logo from top of webpage"></img>
                    </div>
                    <div className='col-6'>
                        <h4>About us</h4>
                        <p>This website was inspired by the recent TikTok trend #KiaBoyz.
                            I drive a Hyundai, but could not find any information
                            online about what cars could be stolen, so I decided to create this
                            website to help other people. For questions, comments, concerns, cannot
                            find your specific car? Please contact me.
                        </p>
                    </div>
                    <div className='col' style={{textAlign: 'center'}}>
                        <h4>Information</h4>
                        <a href='mailto:checkyokia@gmail.com'>Contact Me</a><br></br>
                        <a href="/disclaimer">Legal Disclaimer</a><br></br>
                        <a href="/faq">FAQ</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}