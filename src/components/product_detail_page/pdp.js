import React, {Component} from 'react';
import './pdp.css';
import {
  Link
} from 'react-router-dom';
import axios from 'axios'

const base_URL = 'http://172.104.50.9:3000/api'



const Product_detail = (props) => {
    console.log(props.data)
    return (
        <div className="row">
            <div className="col-sm-5">
                <img src={props.data.image} alt="Product" className="img-thumbnail"></img>
            </div>
            <div className="col-sm-7">
                <div className="card pdp">
                    <div className="card-block">
                        <h4 className="card-title">{props.data.product_name}</h4>
                        <p className="card-text">Price: Rp {props.data.price}</p>
                        <p>{props.data.description}</p>
                        <a href="#" className="btn btn-primary">Buy Now !</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


class Pdp extends Component{
    constructor(props){
        super(props)

        this.state = {
            product_detail_api:  {}
        }  
    }

    componentDidMount(){
        this.getProducts()
    }

    getProducts = async () => { 
        try {
            let response = await axios.get(base_URL + '/productdetails?filter[where][product_id]=743892')
            let responseJson = await response;
            console.log(responseJson.data) 
            console.log(responseJson.data[0]) 
            this.setState({ product_detail_api: response.data[0] })
        } catch(error) {
            console.error(error);
        }
    }

    render(){
        if (this.state.product_detail_api) {
            return (
                <div className="container">
                    <Product_detail data={this.state.product_detail_api} />
                </div>
            )
        }
        
        return <div>Loading...</div>;
    }
}


export default Pdp;