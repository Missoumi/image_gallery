import React, {Component} from 'react'
import '../styles/main.css';
import Carousel from '../atom/carousel';
import Gallery from './Gallery';
import Footer from './footer';

class Main extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="main">
                <Carousel />
                <Gallery />
                <Footer />
            </div>
         );
    }
}
 
export default Main;