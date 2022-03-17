import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name,flags,population} = props.country
    return (
           <div className='country'>
               <img src={flags.png} alt="" />
                <h2>Country:{name.common}</h2> 
                <h4>Population:{population}</h4> 
            </div>
    );
};

export default Country;