import React, { Component } from 'react';
import './shopping-cart.scss';



class ShoppingCart extends Component {
    state = { 
        items: [
            {
            amount: 1,
            name: "Raccoon",
            price: 20.00
        },
        {
            amount: 1,
            name: "Fox",
            price: 30.00
        },
        {
            amount: 1,
            name: "Horse",
            price: 40.00
        },
        {
            amount: 1,
            name: "Parrots",
            price: 50.00
        }
    ]
    } 


    render() { 
        return <div className="mainCart">
            <h2>Warenkorb</h2>
           
            { this.state.items.map(item => <div key={item.name}>{item.amount}x { item.name } {item.price}€ </div>)}


        </div>;
    }
}
 
export default ShoppingCart;