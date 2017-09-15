import React, {Component} from 'react';
import './product.css';
import {
  Link
} from 'react-router-dom';


class Product extends Component{
    render(){
        return(
         <div className="container">
                <div className="row">

                    <div className="col-sm-3">
                        <div className="card product">
                            <img className="card-img-top" src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/m/bp/mbp15touch/gray/mbp15touch-gray-select-201610?wid=452&hei=420&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1496611018929" alt="Product" ></img>
                            <div className="card-block">
                                <h4 className="card-title">Macbook Pro</h4>
                                <p className="card-text">Price: Rp 12.000.000</p>
                                <a href="#" className="btn btn-primary">Add to Cart </a>
                                <br/><br/>
                                <Link to="/pdp"> View Detail Product </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3">
                        <div className="card product">
                            <img className="card-img-top" src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/m/bp/mbp15touch/gray/mbp15touch-gray-select-201610?wid=452&hei=420&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1496611018929" alt="Product" ></img>
                            <div className="card-block">
                                <h4 className="card-title">Macbook Pro</h4>
                                <p className="card-text">Price: Rp 12.000.000</p>
                                <a href="#" className="btn btn-primary">Add to Cart </a>
                                <br/><br/>
                                <Link to="/pdp"> View Detail Product </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3">
                        <div className="card product">
                            <img className="card-img-top" src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/m/bp/mbp15touch/gray/mbp15touch-gray-select-201610?wid=452&hei=420&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1496611018929" alt="Product" ></img>
                            <div className="card-block">
                                <h4 className="card-title">Macbook Pro</h4>
                                <p className="card-text">Price: Rp 12.000.000</p>
                                <a href="#" className="btn btn-primary">Add to Cart </a>
                                <br/><br/>
                                <Link to="/pdp"> View Detail Product </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-3">
                        <div className="card product">
                            <img className="card-img-top" src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/m/bp/mbp15touch/gray/mbp15touch-gray-select-201610?wid=452&hei=420&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1496611018929" alt="Product" ></img>
                            <div className="card-block">
                                <h4 className="card-title">Macbook Pro</h4>
                                <p className="card-text">Price: Rp 12.000.000</p>
                                <a href="#" className="btn btn-primary">Add to Cart </a>
                                <br/><br/>
                                <Link to="/pdp"> View Detail Product </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}


export default Product;