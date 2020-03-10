import React, {Component} from 'react'
import '../styles/main.css';
import Carousel from '../atom/carousel';
import Gallery from './Gallery';

class Main extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="main">
                <Carousel />
                <Gallery />
                <Gallery />
                <Gallery />
                <Gallery />
                <Gallery />
            </div>
         );
    }
}
 
export default Main;