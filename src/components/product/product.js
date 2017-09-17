import React, {Component} from 'react';
import './product.css';
import {
  Link
} from 'react-router-dom';
import axios from 'axios';


const base_URL = 'http://172.104.50.9:3000/api'
  		  


class Product extends Component{
    constructor (props){
        super (props)

        this.state={
            data_product_api:[],
        }
 
    }

    componentWillMount(){
        this.getProduct()
    }

    getProduct = async () =>{
        try{
            let response = await axios.get(base_URL +'/shoppinglists')
            let responseJson = await response;
            console.log(responseJson)
            this.setState({data_product_api:response.data})
        } catch(error){
            console.error(error);

        }
    }

       render(){

           console.log(this.state.data_product_api)
           const product_thumbnail = this.state.data_product_api.map((res, index)=>{
               return(
                   <div className="col-sm-3" key={index}>
                        
                        <div className="card product">
                            <img className="card-img-top" src={res.image} alt="Product" ></img>
                            <div className="card-block">
                                <Link to="/pdp">
                                <h4 className="card-title">{res.product_name}</h4>
                                <p className="card-text">Rp {res.price}</p>
                                </Link>
                                <a href="#" className="btn btn-primary">Add to Cart </a>
                                <br/><br/>
                                 
                            </div>
                        </div>
                    </div>
                   
               )
           })

            return(
                <div className="container">
                    <div className="row">
                        {product_thumbnail}
                    </div>
                </div>

            );

        }

    }            




export default Product;