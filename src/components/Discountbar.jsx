//top bar for all pages but home bc home doesnt need the little menu ico

import React, {useState} from 'react';
import './Discountbar.css'
import {Link, useNavigate} from 'react-router-dom'




const Discountbar = ({setBannerVisible}) => {


  //navigate
  const nav = useNavigate();

  return (
    <div className="discountContainer">
        <div className="discountText">
            <p>Don't miss out on our <strong>30% sale! <Link to="/shop/">Explore our deals.</Link></strong></p>
        </div>
        <i class="bi bi-x" onClick={() => setBannerVisible(false)}></i>
    </div>
  );
};

export default Discountbar; 