import React from 'react';
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";

function Header() {

    const [ {basket, user}, dispatch] = useStateValue();

  const handleAuthentication =  () => {
    if (user) {
        auth.signOut();
    }
  }

    return(
         
        <div className='header'>

            <Link to="/">
            < img
            className="header_logo"
             // eslint-disable-next-line
             src= 'https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?resize=2560%2C1578'
              alt="amazon"

            />  
            </Link>
             
           

             <div className="header__search">
                <input
                className="header__searchInput"
                type="text" />
                <SearchIcon className="header__searchIcon"  />
                
             </div>

             <div className="header__nav">
                <Link to="/login">
                <div onClick={handleAuthentication}
                 className='header__option'>
                    <span className='header__optionLineOne'>Hello {!user? "Guest" : user.email}</span>

                    <span className='header__optionLineTwo'>{user ?
                    "Sign Out" : "Sign In"}</span>
                </div>
                </Link>
                
                
                
                <div className='header__option'>
                    <span 
                    className='header__optionLineOne'>Returns

                    </span>
                    <span 
                    className='header__optionLineTwo'>
                        Orders

                    </span>
                    
                </div>
                <div className='header__option'>
                <span className='header__optionLineOne'>your</span>
                <span className='header__optionLineTwo'>prime</span>

                </div>

                <Link to="/checkout">
                <div className='header__optionBasket'>
                    <ShoppingBasketIcon />
                    <span className='header__optionLineTwo 
                    header__basketCount'>
                        {basket?.length}
                    </span>

                </div>

                </Link>

                
             </div>
            
            
        </div>
        
        
    );
    
    
}
      export default Header;
          