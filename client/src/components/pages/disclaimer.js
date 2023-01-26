import React from 'react';

export default function Disclaimer() {
    return (
        <div className='container'>
            <h1 style={{textAlign: 'center'}}>Legal Disclaimer</h1>
            <p style={{margin: '1rem'}}>This website was made by scouring car manuals for every single Kia and Hyundai from 2011 - 2021
                and checking to see whether or not they include an engine immobilizer or have the option for one. Please note that
                only Hyundais and Kias produced in the United States were considered in the making of this website.
                Although Hyundai and Kia have been quiet on which of their cars are affected by the KiaBoyz, the general
                consensus is all models from 2011 - 2021 with a turn key ignition do not have an immobilizer. 
                If a car came stock with an immobilizer, I labeled it as safe, if a car included the
                option for an immobilizer but did not come stock with one, I labeled it as maybe safe, and if a car 
                did not come stock nor have the option for an immobilizer, I labeled it as not safe. The majority of 
                data and car manuals I looked at came from <a href="https://www.edmunds.com/" rel="noreferrer noopener nofollow" target="_blank">Edmunds.com</a><span> </span>
                where you can search for your car and look at the specs for yourself. I simply compiled data for 
                every car including make, model, year, trim, bodytype, and immobilizer into an 
                SQL file, and depending on user input, query the database until the user finds their car, at which 
                point based on if that car has an immobilizer or not, I return whether or not the car is safe. This database
                was created solely by me and relies on third party data. There may or may not be mistakes inside this
                database. I am not liable for any information or misinformation that one may find on this website.
                Please do not base any decicions on your car based on what you may find on this site. The only
                way to find out if your car has an immobilizer is to call Hyundai or Kia directly. 
            </p>
        </div>
    )
}