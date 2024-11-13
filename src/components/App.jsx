import React, { Component } from 'react';
import Navbar from "./navbar";
import Product from "./product";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./../index.css";
import ShoppingCart from './shopping-cart';

class App extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
        <Navbar />
        <div className='main-product'>
            <div className="product-container">
                <Product title="Raccoon" image="raccoons.jpg" description="Cute Raccoons" />
                <Product title="Fox" image="fox.jpg" description="Hunting Fox"/>
                <Product title="Horse" image="horse.jpg" description="Group of Horses"/>
                <Product title="Parrots" image="parrots.jpg" description="Parent Parrots"/>
            </div>
            <ShoppingCart />
        </div>
        </React.Fragment>;
    }
}
 
export default App;