import React, {Component} from 'react';
import './payment.css';

class Payment extends Component{
    render(){
        return(
                <div className="card payment">
                    <div className="card-block">
                        <form>
                          <h4> Pembayaran Via Kartu Visa/Mastercard/JCB</h4>
                            <label className="deskripsi">
                            Nomor Kartu
                            <br/>
                            <input type="text" className="nomorkartu" />
                            </label>
                          
                          <div className ="form-inline">
                                <label className="dua">Waktu Kadaluarsa</label>
                                
                                
                                <select id="ddlCars">
                                    <option value="">Bulan</option>
                                    <option className="dropdown-item">1</option>
                                    <option className="dropdown-item">2</option>
                                    <option className="dropdown-item">3</option>
                                    <option className="dropdown-item">4</option>
                                    <option className="dropdown-item">5</option>
                                    <option className="dropdown-item">6</option>
                                    <option className="dropdown-item">7</option>
                                    <option className="dropdown-item">8</option>
                                    <option className="dropdown-item">9</option>
                                    <option className="dropdown-item">10</option>
                                    <option className="dropdown-item">11</option>
                                    <option className="dropdown-item">12</option>
                                </select>
                                
                                <select id="ddlCars">
                                    <option value="">Tahun</option>
                                    <option className="dropdown-item">2017</option>
                                    <option className="dropdown-item">2018</option>
                                    <option className="dropdown-item">2019</option>
                                    <option className="dropdown-item">2020</option>
                                    <option className="dropdown-item">2021</option>
                                    <option className="dropdown-item">2022</option>
                                    <option className="dropdown-item">2023</option>
                                    <option className="dropdown-item">2024</option>
                                    <option className="dropdown-item">2025</option>
                                    <option className="dropdown-item">2026</option>
                                    <option className="dropdown-item">2027</option>
                                    <option className="dropdown-item">2028</option>
                                </select>

                                
                               
                                <label className="cvv">
                                CVV
                                <input type="text" className="CV" />
                                </label>
                                

                          </div>
                          <br/>

                          
                          <button type="submit" className="btn btn-primary float-left" >Cancel</button>
                          <button type="submit" className="btn btn-primary float-right">Pay</button>
                          

                    </form>
                    </div>
                </div>

        


         
        );
    }
}


export default Payment;