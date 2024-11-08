import '../styles/register.css';
import React from 'react';
import { Link } from 'react-router-dom';
import mylogo from '../assets/logo.png';

function Register() {
    return (
        <div>
            <div className='bg-white w-full p-5 shadow-sm fixed'><img src={mylogo} alt="" className=''/></div>
            <div className="register-container">
                <div className="register-box">

                    <h2 className="register-title">Register</h2>

                    <div className="reg-group">
                        <label htmlFor="username">Name <span className="required">*</span></label>
                        <input type="username" id="username" className="input-field" required />
                    </div>

                    <div className="reg-group">
                        <label htmlFor="email">Email <span className="required">*</span></label>
                        <input type="email" id="email" className="input-field" required />
                    </div>

                    <div className="reg-group">
                        <label htmlFor="password">Password <span className="required">*</span></label>
                        <input type="password" id="password" className="input-field" required />
                    </div>
                    <Link to="/login">
                        <button className="register-btn">Register</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Register;

