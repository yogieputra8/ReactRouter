import React, {Component} from 'react';
import './product.css';
import {
  Link
} from 'react-router-dom';
import axios from 'axios'

const base_URL = 'http://172.104.50.9:3000/api'

class Product extends Component{
    constructor(props){
        super(props)

        this.state = {
            products: [
                { 
                    name: 'iMac',
                    price: 12000
                },
                { 
                    name: 'Mac Mini',
                    price: 15000
                },
                { 
                    name: 'Mbp',
                    price: 18000
                }
            ],
            data_product_api: [],
        }
    }

    componentDidMount(){
        // console.log('did mount') 
    }

    componentWillMount(){
        this.getProducts()
    }


    getProducts = async () => { 
        try {
            let response = await axios.get(base_URL + '/shoppinglists')
            let responseJson = await response;
            console.log(responseJson) 
            this.setState({ data_product_api: response.data })
        } catch(error) {
            console.error(error);
        }
    }

    
    // 1. request get api, taruh willmount
    // 2. data response dari api, disimpan ke state
    // 3. state di-map ke -view
 

    render(){
        // console.log(this.state.products)
        // this.state.products.map(res => {
        //     console.log(res)
        // })

        console.log(this.state.data_product_api)
        const product_thumbnail = this.state.data_product_api.map((res, index) => {
            // console.log(res)
            return (
                <div className="col-sm-3" key={index}>
                    <div className="card product">
                                <img className="card-img-top" src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/m/bp/mbp15touch/gray/mbp15touch-gray-select-201610?wid=452&hei=420&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1496611018929" alt="Product" ></img>
                                <div className="card-block">
                                    <h4 className="card-title">{res.name}</h4>
                                    <p className="card-text">Price: Rp {res.price}</p>
                                    <a href="#" className="btn btn-primary">Add to Cart </a>
                                    <br/><br/>
                                    <Link to="/pdp"> View Detail Product </Link>
                                </div>
                            </div>
                        </div>
            )
        }) 
 


        return (
            <div className="container">
                <div className="row">
                    {product_thumbnail}
                </div>
            </div>
        );
    }
}


export default Product;