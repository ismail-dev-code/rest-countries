import React, { use } from 'react';
import Country from './country/Country';
import './components/countries.css'


const Countries = ({countriesPromise}) => {
    const countries = use(countriesPromise);
    
   
    return (
        <div className='countries'>
            <h1><small>Total Countries:</small> {countries.length}</h1>
            {
        countries.map(country=> <Country key={country.cca3} country={country}></Country>)
    }
        </div>
    );
   
};

export default Countries;           