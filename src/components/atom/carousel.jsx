import React from 'react';
import ButtonContinue from '../styled_component/ButtonContinue';
import '../styles/carousel.css'

const Carousel = () => {
    return ( 
        <div className="custom_carousel d-flex justify-content-center">
            <div className="text-center carousel_content">
                <h1 className="display-3">Hey, I'm Snapshot</h1>
                <h3 className="pt-3 pb-4">A fully responsive gallery template by TEMPLATED</h3>
                <ButtonContinue className="btn">Continue</ButtonContinue>
            </div>
        </div>
     );
}
 
export default Carousel;