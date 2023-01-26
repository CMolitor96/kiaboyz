import React from 'react';

export default function Faq() {
    return (
        <div className='container'>
            <h1 style={{textAlign: 'center', margin: '1rem'}}>Frequently Asked Questions</h1>
            <h4>What cars are affected by the KiaBoyz?</h4>
            <p>The general consensus is all Kias and Hyundais with a turn key ignition from 2011 - 2021 are affected.
                An good rule of thumb but not a fact is if the car is equipped with push button start, the car has an 
                engine immobilizer.
            </p>
            <h4>What is an engine immobilizer?</h4>
            <p>An engine immobilizer is an anti-theft system present in cars that blocks the ability to start the car
                unless it detects a signal from a key that matches the signal of the immobilizer. Basically, if a car
                has an immobilizer and a thief is trying to start the car without the key, the car will not start because
                the immobilizer has not receieved the matching signal from they key associated with the car.
            </p>
            <h4>Are Kia or Hyundai doing anything about the KiaBoyz?</h4>
            <p>Both Kia and Hyundai have kept pretty quiet about this viral trend, but both companies have encouraged
                owners to contact their customer service centers to field specific questions about their car.
                Some local law enforcement agencies in affected US cities have responded with advising owners to
                buy steering wheel locks for their cars
            </p>
            <h4>My car can be stolen. What can I do?</h4>
            <p>There have been multiple strategies to mitigate the risk of your car being stolen, proposed by
                law enforcement, and from Hyundai and Kia themselves. Law enforcement have encouraged the purchase and
                installation of <a href='https://www.amazon.com/Antitheft-Locking-Devices/b?ie=UTF8&node=15735171' target="_blank" rel="noopener noreferrer">steering wheel locks</a> 
                <span> </span>which can be purchased on Amazon. Hyundai has partnered up with Compustar to release a <span> </span>
                <a href='https://www.compustar.com/systems/hyundai-remote-start-system/' target="_blank" rel="noopener noreferrer">security kit</a> for affected vehicles. 
                The kit is purported to cost around $500 after labor fees. Other options include buying an aftermarket immobilizer,
                many of which can be found online or in big box stores. 
            </p>
            <h4>I cannot find my car on here</h4>
            <p>
                If you are unsure of your cars specific bodytype, trim, year, or model, there are a few options for you. If you cannot find your car
                at all, please <a href='mailto:checkyokia@gmail.com'>email me</a> with your cars specific information so that I can add it to the database. 
            </p>
            <ul>
                <li>You can call Kia or Hyundai directly, provide them with your Vehicle Identification Number (VIN) and ask if your car has an engine immobilizer</li>
                <li>You can refer to your owners manual, which should tell you everything about your specific car including whether or not it has an engine immobilizer</li>
                <li>A lot of the bodytypes for a lot of cars look very similar at first, but the major differences are engine liter capacity and AWD versus 2WD, so pay attention</li>
            </ul>
        </div>
    );
}