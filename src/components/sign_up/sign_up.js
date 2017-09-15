import React, {Component} from 'react';
import './sign_up.css';
import {
    Link
  } from 'react-router-dom';
  
class Signup extends Component{
    render(){
        return(
                <div className="card Signup">
                    <div className="card-block">
                        <form>
                          <h4> Daftar akun baru sekarang </h4>
                            <input type="email" className="email" placeholder="E-mail" />
                            <br/>
                            <input type="password" className="password" placeholder="Password" />
                            <br/>
                            <input type="password" className="password" placeholder="Confirm Password" />
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