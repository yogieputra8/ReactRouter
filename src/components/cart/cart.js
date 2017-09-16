import React, {Component} from 'react';
import './cart.css';
import {
  Link
} from 'react-router-dom';


class Cart extends Component{
    render(){
        return(
         <div className="container">
                <h4>Shopping Cart</h4>
                <div className="row">
                
                    <div className="col-sm-2"></div>  
                   
                    <div className="col-sm-8">
                            <div className="card cart">
                                <div className="card-block">
                                    <div className="row">

                                        <div className="col-sm-1"></div>
                                        <div className="col-sm-4">
                                            <img src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/m/bp/mbp15touch/gray/mbp15touch-gray-select-201610?wid=452&hei=420&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1496611018929" alt="Product" className="img-thumbnail"></img>
                                        </div>
                                        <div className="col-sm-6">
                                            <h4 className="card-title">Macbook Pro</h4>
                                            <input type="text" className="quantity" placeholder="Quantity" />
                                            <p className="card-text">Subtotal: Rp 12.000.000</p>
                                            <Link to="/payment">
                                                <button type="submit" className="btn btn-primary" >Buy</button>
                                            </Link>
                                            
                                        </div>
                                        <div className="col-sm-1"></div>

                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="col-sm-2"></div>

                </div>
            </div>
        );
    }
}


export default Cart;