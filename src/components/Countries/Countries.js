import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import '../Countries/Countries.css'

const Countries = () => {
    const[countries , setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    return (
        <div>
            
            <h1 className='heading'>Total Countries in the world: {countries.length}</h1>
            {/* {
               countries.map(country=><Country name={country.name.common} flags={country.flags.png}></Country>)
            } */}

            <div  className='all-countries'>
            {
               countries.map(country=><Country 
                country={country}
                key={country.cca3}
                ></Country>)
            }
            </div>

        </div>
    );
};

export default Countries;