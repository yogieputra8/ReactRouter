import React, {Component} from 'react';
import './product.css';
import {
  Link
} from 'react-router-dom';
import axios from 'axios'
import { BASE_API_URL } from '../lib/util'


class Product extends Component{
    constructor(props){
        super(props)

        this.state = {
            data_product_api: []
        }
    }

    componentWillMount(){
        this.getProducts()
    }

    getProducts = async () => { 
        try {
            let response = await axios.get(BASE_API_URL + '/shoppinglists')
            let responseJson = await response;
            console.log(responseJson) 
            this.setState({ data_product_api: response.data })
        } catch(error) {
            console.error(error);
        }
    }

    render(){  
        if (this.state.data_product_api.length > 0){
            return <Product_thumbnail data={this.state.data_product_api} /> 
        }

        return <div>Loading...</div> 
    }
}



const Product_thumbnail = (props) => {
    const Products = props.data.map((res, index) => {
            return (
                <div className="col-sm-3" key={index}>
                    <div className="card product">
                        <img className="card-img-top" src={res.image} alt="Product" ></img>
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
                {Products}  
            </div>
            <br/><br/><br/><br/><br/>
        </div>
    )
}


export default Product;