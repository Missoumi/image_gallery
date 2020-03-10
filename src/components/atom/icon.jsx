import React from 'react';

const Icon = (props) => {
    return ( 
        <img className="img-fluid w-50 my-3 d-block mx-auto" src={props.icon} alt={props.alt} />
     );
}
 
export default Icon;