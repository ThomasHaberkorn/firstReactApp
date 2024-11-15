import React, { Component } from 'react';
import './shopping-cart.scss';



class ShoppingCart extends Component {
    state = { 
        items: []
    } 

    calculateTotalPrice = () => {
        return this.props.items.reduce((total, item) => total + item.price * item.amount, 0).toFixed(2);
    }

    render() { 
        return (
        <div className="mainCart">
            <h2>Warenkorb</h2>
           
            { this.props.items.map(item => (
                <div key={item.name}>
                    {item.amount}x { item.name } {(item.price * item.amount).toFixed(2) }€ 
                </div>
            ))}
          
          <hr style={{ border: "none", borderTop: "2px solid #ccc", margin: "10px 0", width: "80%" }} />

                <h4>Gesamtpreis: {this.calculateTotalPrice()}€</h4>

        </div>
        );
    }
}
 
export default ShoppingCart;