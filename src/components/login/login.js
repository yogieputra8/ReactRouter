import React, {Component} from 'react';
import './login.css';
import {
    Link
  } from 'react-router-dom';
  


class Login extends Component{
    render(){
        return(
                <div className="card Login">
                    <div className="card-block">
                        <form>
                          <h4> Silahkan masuk ke dalam akun anda </h4>
                            <input type="email" className="email" placeholder="E-mail" />
                            <br/>
                            <input type="password" className="password" placeholder="Password" />
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