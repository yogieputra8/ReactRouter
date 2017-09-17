import React, {Component} from 'react';
import './sign_up.css';
import {
    Link
  } from 'react-router-dom';
  
class Signup extends Component{
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
            confirm_pass: ''
        }
    }

    onSignup = (e) => {
        e.preventDefault();
        
        console.log(this.state.email)
    }


    render(){
        return(
            <div className="card Signup">
                <div className="card-block">
                    <form onSubmit={this.onSignup}>
                        <h4>Daftar akun baru sekarang</h4>
                        <input 
                            type="email" 
                            className="email" 
                            placeholder="E-mail" 
                            onChange = {(event, newValue) => this.setState({ email: event.target.value })} />
                        <br/>
                        <input 
                            type="password" 
                            className="password" 
                            placeholder="Password" 
                            onChange = {(event, newValue) => this.setState({ password: event.target.value })} />
                        <br/>
                        <input 
                            type="password" 
                            className="password" 
                            placeholder="Confirm Password" 
                            onChange = {(event, newValue) => this.setState({ confirm_pass: event.target.value })} />
                        <br/>
                        <button type="submit" className="btn btn-primary">Sign Up! </button>
                        <br/>
                        <a href="#">Log in </a>
                    </form>
                </div>
            </div>
        );
    }
}


export default Signup;