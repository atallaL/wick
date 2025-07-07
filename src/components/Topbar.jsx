import React, {useState} from 'react';
import './Topbar.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Link, useNavigate} from 'react-router-dom'

import logo from '../assets/logo.png';

import {useCart} from '../context/CartContext'


const Topbar = ({bannerVisible}) => {

    //
    const {getTotalQuantity} = useCart();

    //states
    const inCart = getTotalQuantity();

    //navigate
    const nav = useNavigate();

    return (
        <div className={`topbarContainer ${bannerVisible ? 'bannerVisible' : ''}`}>
            <div className="topbarElements">
                <div className="topbarNav">
                    <div className="topbarLogo">
                        <Link to="/">
                            <img className="topbarLogoImage" src={logo}/>
                        </Link>
                    </div>
                    <div className="topbarNavLinks">
                        <p onClick={() => nav('/')}>home</p>
                        <p onClick={() => nav('/shop')}>shop</p>
                    </div>
                </div>
                <div className="topbarCart" onClick={() => nav('/cart')}>
                    <i className="bi bi-cart"></i>
                    <p>({inCart})</p>
                </div>
            </div>
        </div>
    );
};

export default Topbar; 