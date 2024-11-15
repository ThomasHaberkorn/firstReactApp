import React, { Component } from 'react';

class Product extends Component {
    state = {  } 
    
    
    render() { 
        return <div className="card" styles={{width: '8vw'}}>
        <img src={"/assets/img/" + this.props.image} className="card-img-top" alt="Racoons" styles={{width: '3vw'}} />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
          <button onClick={this.props.onAdd} className="btn btn-primary">Go somewhere</button>
        </div>
      </div>;
    }
}
 
export default Product;