import React, {Component} from 'react';
import './pdp.css';
import {
  Link
} from 'react-router-dom';


class Pdp extends Component{
    render(){
        return(
         <div className="container">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-3">

                        <img src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/m/bp/mbp15touch/gray/mbp15touch-gray-select-201610?wid=452&hei=420&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1496611018929" alt="Product" className="img-thumbnail"></img>

                        
                    </div>
                    <div className="col-sm-5">
                            <div className="card pdp">
                                <div className="card-block">
                                    <h4 className="card-title">Macbook Pro</h4>
                                    <p className="card-text">Price: Rp 12.000.000</p>
                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                                        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                                        of Lorem Ipsum.
                                    </p>
                                    <Link to="/payment">
                                    <button type="submit" className="btn btn-primary" >Buy</button>
                                    </Link>
                                </div>
                            </div>
                    </div>
                    <div className="col-sm-2"></div>

                </div>
            </div>
        );
    }
}


export default Pdp;