import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { searchCarImmobilizer } from '../../utils/API';

export default function CarImmobilizer() {
    const [carImmobilizer, setCarImmobilizer] = useState([]);

    const {make, model, year, trim, bodytype} = useParams();

    useEffect(() => {
        const getImmobilizerData = async () => {
            try {
                let response = await searchCarImmobilizer(make, model, year, trim, bodytype);
                setCarImmobilizer(response);
            } catch (err) {
                console.log(err);
            }
        };
        getImmobilizerData();
    }, [make, model, year, trim, bodytype]);

    function supportNumber() {
        let hyundaiNumber = '1-800-633-5151';
        let kiaNumber = '1-800-333-4542';
        if (make === 'Hyundai') {
            return (
                <p>For more information, please refer to the <a href='/faq'>FAQ</a>, the <a href='/disclaimer'>Disclaimer</a> or call Hyundai Support at <span> </span>
                    <a href="tel:18006335151">{`${hyundaiNumber}`}</a>
                </p>
            )
        } else {
            return (
                <p>For more information, please refer to the <a href='/faq'>FAQ</a>, the <a href='/disclaimer'>Disclaimer</a> or call Kia Support at <span> </span>
                    <a href="tel:18003334542">{`${kiaNumber}`}</a>
                </p>
            )
        }
    }


    function outcome() {
        if (carImmobilizer.Immobilizer === 'TRUE') {
            return (
                <section style={{margin: '1rem'}}>
                <h3 key={carImmobilizer.Immobilizer} style={{color: 'green', textAlign: 'center'}}>You car is safe!</h3>
                <p>Your car comes stock with an engine immobilizer, an important engine piece that
                    makes it difficult to steal by the KiaBoyz. This does not mean that no one may ever try
                    and steal your car, but an engine immobilizer is a great theft deterrent.
                </p>
                {supportNumber()}
                </section>
            );
        } else if (carImmobilizer.Option_for_Immobilizer === 'TRUE') {
            return (
                <section style={{margin: '1rem'}}>
                <h3 key={carImmobilizer.Option_for_Immobilizer} style={{color: '#DEC20B', textAlign: 'center'}}>You car may be stolen!</h3>
                <p>This means that your car did not originally come stock with an engine immobilizer, 
                    but at the time of purchase by the original owner there was an option to add one. 
                    So this car may or may not have an engine immobilizer. The only way to find out
                    for sure is to contact your respective car manufacturer (see below). All you have to do is
                    provide your Vehicle Identification Number (VIN) and your car manufacturer can look
                    up if your car has an engine immobilizer or not. 
                </p>
                {supportNumber()}
                </section>
            )
        } else {
            return (
                <section style={{margin: '1rem'}}>
                        <h3 key={carImmobilizer.Immobilizer} style={{color: 'red', textAlign: 'center'}}>Your car is not safe!</h3>
                        <p>Your car is very susceptible to theft by the KiaBoyz. Your car does not have a stock
                            engine immobilizer, nor did it have an option to add one at the time of original purchase.
                        </p>
                        {supportNumber()}
                </section>
            )
        }

    }

    return (
        <div>
            <h2 style={{textAlign: 'center', margin: '1rem'}}>{`Can your ${year} ${make} ${model} ${trim} with bodytype ${bodytype} get stolen?`}</h2>
            <div className='d-flex flex-row flex-wrap justify-content-center'>
                {outcome()}
            </div>
            <div className='d-flex flex-row flex-wrap justify-content-center'>
                <Link key={trim} className='goose' to={`/search/${make}/${model}/${year}/${trim}`}>Go Back to Bodytype</Link>
                <Link key={bodytype} className='goose' to={`/`}>Return to home</Link>
            </div>
            
        </div>
    );
}