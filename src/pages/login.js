import React from 'react';
import logo from '../assets/images/endless-logo.png';
import { Login,LOGIN,YourName,Password,RememberMe } from '../constant';
import { useNavigate} from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { loginAdmin } from '../api/http';
import { useState, useEffect } from 'react';

const Logins = () => {
    const history = useNavigate();

    const [formData, setFormData] = useState({
        email: 'admin',
        password: '12345678'
    });

    const loginAuth = () => {
        history(`${process.env.PUBLIC_URL}/dashboard/home`);
    }


    function handleSubmit(event){
        event.preventDefault();
    }

    function handleInputChanges(key, event){
        setFormData(preVal=>({...preVal, [key]: event.target.value}));
    }

   


    return (
        <div>
            <div className="page-wrapper">
                <div className="container-fluid p-0">
                    {/* <!-- login page start--> */}
                    <div className="authentication-main">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="auth-innerright">
                                    <div className="authentication-box">
                                        <div className="text-center"><img src={logo} alt="" /></div>
                                        <div className="card mt-4">
                                            <div className="card-body">
                                                <div className="text-center">
                                                    <h4>{LOGIN}</h4>
                                                    <h6>{"Enter your Username and Password"} </h6>
                                                </div>
                                                <form className="theme-form">
                                                    <div className="form-group">
                                                        <label className="col-form-label pt-0">{YourName}</label>
                                                        <input className="form-control" type="text" required="" value={formData.email} onChange={(event)=>handleInputChanges('email', event)} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-form-label">{Password}</label>
                                                        <input className="form-control" value={formData.password} onChange={(event)=>handleInputChanges('password', event)} type="password" required="" />
                                                    </div>
                                                    {/* <div className="checkbox p-0">
                                                        <input id="checkbox1" type="checkbox" />
                                                        <label htmlFor="checkbox1">{RememberMe}</label>
                                                    </div> */}
                                                    <div className="form-group form-row mt-3 mb-0 d-grid">
                                                        <button className="btn btn-danger" type="button" onClick={() => loginAuth()}>{Login}</button>
                                                    </div>
                                                    {/* <div className="login-divider"></div> */}
                                                    {/* <div className="social mt-3">
                                                        <div className="form-group btn-showcase d-flex">
                                                            <button className="btn social-btn btn-fb d-inline-block"> <i className="fa fa-facebook"></i></button>
                                                            <button className="btn social-btn btn-twitter d-inline-block"><i className="fa fa-google"></i></button>
                                                            <button className="btn social-btn btn-google d-inline-block"><i className="fa fa-twitter"></i></button>
                                                            <button className="btn social-btn btn-github d-inline-block"><i className="fa fa-github"></i></button>
                                                        </div>
                                                    </div> */}
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- login page end--> */}
                </div>
            </div>
        </div>
    );
};

export default Logins;