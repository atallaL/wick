//top bar for all pages but home bc home doesnt need the little menu ico

import React, {useState} from 'react';
import './Topbar.css'
import {Link, useNavigate} from 'react-router-dom'

import logo from '../assets/logo.png';


const Topbar = () => {

  //states
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  //navigate
  const nav = useNavigate();

  return (
    <div className="topbarContainer">
        <div className="topbarElements">
            <div className="topbarLogo">
                <Link to="/">
                  <img className="topbarLogoImage" src={logo}/>
                </Link>
            </div>
        </div>
    </div>
  );
};

export default Topbar; 