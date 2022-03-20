import React from 'react';
import'./Country.css'

const Country = (props) => {
    console.log(props.country);
    const {name,population,area,region,flags,capital,coatOfArms} = props.country;
    return (
        <div className='country'>
            <h3>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
            <p>Capital: {capital}</p>
            <img src={coatOfArms.png} alt="" />

            
        </div>
    );
};

export default Country;