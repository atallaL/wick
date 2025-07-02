//top bar for all pages but home bc home doesnt need the little menu ico

import React, {useState} from 'react';
import './Bottombar.css'
import {Link} from 'react-router-dom'

const Bottombar = () => {

  return (
    <div className="bottombarContainer">
        <div className="bottombarText">
            designed by <Link target="_blank" to='https://atallal.github.io/portfolio-website/'>leonardo atalla</Link>
        </div>
    </div>
  );
};

export default Bottombar; 