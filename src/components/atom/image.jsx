import React from 'react';

const Image = (props) => {
    return ( 
        <div className="col-3 img_">
            <img className="img-fluid " src={props.image} alt={props.alt} /> 
        </div>
     );
}
 
export default Image;