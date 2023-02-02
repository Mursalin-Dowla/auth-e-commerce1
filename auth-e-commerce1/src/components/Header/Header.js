import React from 'react';
import './Header.css';
import logo2 from '../../images/logo.jpg';
import {Link} from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = ()=>{
    signOut(auth);
  }
    return (
        <nav className='header'>
           <img src={logo2} alt="" />
           <div>
             <Link to="/shop">Shop</Link>
             <Link to="/orders">Orders</Link>
             <Link to="/inventory">Inventory</Link>
             <Link to="/about">About</Link> 
             {user ? <span>' '
              <span className='sign_out'>{user.email.slice(0,3)} <span><button onClick={handleSignOut}>Sign Out</button></span></span>
              
             </span>
             :<Link to="/login">LogIn</Link>}
           </div>
             
        </nav>
    );
};

export default Header;