import React from 'react';
import LetsStart from '../global_components/LetsStart';
import Typography from '@mui/material/Typography';

import GooglePlay from '../../assets/img/GooglePlay.svg';
import AppStore from '../../assets/img/AppStore.svg';

import FB from '../../assets/img/social/FB.svg';
import TW from '../../assets/img/social/TW.svg';
import YT from '../../assets/img/social/YT.svg';

function Footer() {
    return (
        <footer className="footer_area">
            <div className="footer_top">
                <LetsStart />
            </div>
            <div className="footer_content">
                <div className="footer_container">
                    <Typography variant="p" component="p" className='fz24 fw3 colW text-center'>
                        TheOneSpy software only encourages for ethical supervision of children to keep an eye on their digital activities and to monitor employees for the protection of business secrets. Beside, TheOneSpy discourages illicit and intrusive surveillance for the sake of spying or stalking virtually anyone. However, even for ethical supervision user has to have written consent on paper otherwise, we retain the rights to terminate the license of a user immediately and permanently. It would consider offense against the state law to install TheOneSpy application on the phone you don’t own or you don’t have owner’s awareness. In a nutshell, we don’t allow the usage of software for any illegal, immoral activity whatsoever. Therefore, being a user you would solely responsible, accountable for the nature of the usage of our application and concerning the law in your area. <a href="#" className='colW'>Read More</a>
                    </Typography>
                    <div className="footer_links colW text-center">
                        <span className="colB"><a href="#" className='colB'>Terms</a> | <a href="#" className='colB'>Refund</a> | <a href="#" className='colB'>Privacy</a> |</span> This site uses cookies. By continuing to browse the site you are agreeing to our use of cookies.
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="footBotContainer ">
                    <div className="footer_app">
                        <p className='fz30'>Download Our App</p> 
                        <a href="#"><img src={GooglePlay} alt="GooglePlay" /></a> 
                        <a href="#"><img src={AppStore} alt="AppStore" /></a>
                    </div> 
                    <div className="foote_social">
                        <p className="fz30">Follow Us</p> 
                        <ul className="socialLinks">
                            <li><a href="#"><img src={FB} alt="Facebook" title='Facebook' /></a></li>
                            <li><a href="#"><img src={TW} alt="Twiter" title='Twiter' /></a></li>
                            <li><a href="#"><img src={YT} alt="Youtube" title='Youtube' /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;