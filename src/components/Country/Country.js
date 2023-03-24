import React from 'react';
import './Country.css'

const Country = (props) => {
    const {area,region,name,flags} = props.country;
    console.log(props.country);
    // console.log(props.country);
    // const {area,region,population,name} = props.country;
    return (
        <div className='country bg-warning'>
            {/* <h2>Country Name:{name.common}</h2>
            <p>Population:{population}</p>
            <p> <small>Area:{area}</small> </p>
            <p><small>Region:{region}</small></p> */}

            <h2>Name:{name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Area:{area}</p>
            <p>Region:{region}</p>
        </div>
    );
};

export default Country;