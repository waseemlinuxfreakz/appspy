import React from 'react';

import Logo from '../../assets/img/logo.svg';

function Header() {
    return ( 
        <header className="header_area">
            <nav className="navcontainer">
                <div className="nav_brand">
                    <a href="#"><img src={Logo} alt="One" /></a>
                </div>
                <div className="menu_containe">
                    <ul className='nav_list'>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Solutions</a></li>
                        <li><a href="#">Quick Tour</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">More</a></li>
                        <li><a href="#">Business</a></li>
                    </ul>
                </div>
                <div className="menu_rightbar">
                    <a href="#" className="buyNow lightGreenBtn">Buy Now</a>
                    <div className="select_language">
                        <select name="Language" id="Language">
                            <option value="ENG">ENG</option>
                            <option value="FR">FR</option>
                        </select>  
                    </div>
                </div>
            </nav>
        </header>
     );
}

export default Header;