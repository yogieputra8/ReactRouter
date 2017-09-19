import React, {Component} from 'react';
import './login.css';
import {Link} from 'react-router-dom';
import {BASE_API_URL} from '../lib/util'
import axios from 'axios';


class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            message:'',
            error: false
        }
        
    }

    onLogin = (e)=>{
        e.preventDefault();

        
        if(this.state.email || this.state.password === null){
            this.setState({
                error: false
            })

            const params ={
                "email": this.state.email,
                "password":this.state.password

                
            }
            
            axios.post(BASE_API_URL + '/Users/login',params)
                .then(res=>{
                    console.log(res)
                    if(res.status === 200 ){
                        this.setState({message:'Login success!!'})
                    }
                })
                .catch(err=>{
                    console.log(err)
                    this.setState({message:'Anda belum memiliki akun, silahkan sign Up!'})
                })
        }   else{
            this.setState({
                error:true
            })
        }
    }

    render(){
        return(
                <div className="card Login">
                    <div className="card-block">
                        <form onSubmit={this.onLogin}>
                          <h4> Silahkan masuk ke dalam akun anda </h4>
                          <h6> {this.state.error && 'email dan password harus di isi'}</h6>
                          <h6> {this.state.message !='' && this.state.message}</h6>
                            <input 
                                type="email" 
                                className="email" 
                                placeholder="E-mail" 
                                onChange= {(event)=>this.setState({email:event.target.value})} />
                            <br/>
                            <input 
                                type="password" 
                                className="password" 
                                placeholder="Password"
                                onChange={(event)=>this.setState({password:event.target.value})}         />
                            <br/>
                            <button type="submit" className="btn btn-primary"> Login </button>
                            <br/>
                            <a href="#">Sign Up! </a>      
                        </form>
                    </div>
                </div>

        


         
        );
    }
}


export default Login;