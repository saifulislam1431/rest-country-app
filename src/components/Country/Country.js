import React from 'react';
import '../Country/Country.css'
const Country = (props) => {
    const{flags,name,region}=props.country;
    return (
        <div  className="countries-container">
            <img src={flags.png} alt="" className='imgs'/>
            <h3>Name: {name.common}</h3>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;