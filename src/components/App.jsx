import React, { Component } from 'react';
import Navbar from "./navbar";
import Product from "./product";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./../index.css";
import ShoppingCart from './shopping-cart';

class App extends Component {
    state = {  
        items: []
    } 


    addItem = (amount, name, price) => { 

        // debugger;
        let currentItems = this.state.items;

        let existingItem = this.state.items.find(item => item.name === name);
        if(existingItem) {
            existingItem.amount += amount;
            this.setState({items: currentItems});
            return;
        } else {
            currentItems.push({amount: amount, name: name, price: price});
            
        }


        
        this.setState({items: currentItems});
        console.log(this.state.items);
        
     }

    render() { 
        return <React.Fragment>
        <Navbar />
        <div className='main-product'>
            <div className="product-container">
                <Product onAdd={() => this.addItem(1, 'Raccoon', 20.99)} title="Raccoon" image="raccoons.jpg" description="Cute Raccoons" />
                <Product onAdd={() => this.addItem(1, 'Fox', 22.99)} title="Fox" image="fox.jpg" description="Hunting Fox"/>
                <Product onAdd={() => this.addItem(1, 'Horse', 23.99)} title="Horse" image="horse.jpg" description="Group of Horses"/>
                <Product onAdd={() => this.addItem(1, 'Parrots', 26.99)} title="Parrots" image="parrots.jpg" description="Parent Parrots"/>
            </div>
            <ShoppingCart items={this.state.items}/>
        </div>
        </React.Fragment>;
    }
}
 
export default App;