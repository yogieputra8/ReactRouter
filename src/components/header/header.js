import React, {Component} from 'react';
import './header.css';
import {
  Link
} from 'react-router-dom';



class Header extends Component{
    render(){
        return(
              
        <header>
            <div className="logo">
            LOGO
            </div> 

            <nav>
                <ul>
                    <li>
                        <Link to="/Product"> Home </Link>
                    </li>
                    <li>
                        <a href="#"> Cart </a>
                    </li>
                    <li>
                    <Link to="/Login"> Login </Link>
                    </li>
                    <li>
                        <Link to="/Signup"> SignUp </Link>
                    </li>
                </ul>
            </nav>
            

        </header>


         
        );
    }
}


export default Header;