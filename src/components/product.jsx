import React, { Component } from 'react';

class Product extends Component {
    state = {  } 
    render() { 
        return <div className="card" styles={{width: '8vw'}}>
        <img src="/assets/img/raccoons.jpg" class="card-img-top" alt="Racoons" styles={{width: '3vw'}} />
        <div className="card-body">
          <h5 clasNames="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>;
    }
}
 
export default Product;