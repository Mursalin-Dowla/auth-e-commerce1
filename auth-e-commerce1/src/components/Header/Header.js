import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import logo2 from '../../images/logo.jpg';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
           <img src={logo2} alt="" />
           <div>
             <Link to="/shop">Shop</Link>
             <Link to="/orders">Orders</Link>
             <Link to="/inventory">Inventory</Link>
             <Link to="/about">About</Link> 
           </div>
             
        </nav>
    );
};

export default Header;