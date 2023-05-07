/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { Link } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

// import { useLocation, useHistory, useNavigate } from "react-router";

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const location = useLocation();
    let navigate = useNavigate();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();
        if ((email, password)) {
            loginUser(email, password)
                .then((result) => {
                    console.log(result.user);
                    navigate("/");
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    };
    return (
        <div>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6 ">
                        <div className="border w-100 m-auto text-center p-5">
                            <form action="" className="form-container">
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="email p-3 m-2"
                                    type="email"
                                    placeholder="enter your email"
                                />
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="password p-3 m-2"
                                    type="password"
                                    placeholder="enter your password"
                                />
                                <button
                                    onClick={handleLogin}
                                    className="btn btn-info w-75 p-2 mt-3"
                                >
                                    Login
                                </button>
                                <p className="p-2">
                                    <small className="text-info">
                                        Do Not Have Account ? Please <Link to='/register'>Registration</Link>
                                    </small>
                                </p>
                            </form>
                        </div>
                    </div>
                    {/* <div className="col-md-6">
                        <img
                            className="w-100"
                            src="https://i.ibb.co/hYJTmVX/undraw-Mobile-login-re-9ntv-1.png"
                            alt=""
                        />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Login;
