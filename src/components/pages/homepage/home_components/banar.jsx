import React from 'react';

import PlayIcon from '../../../../assets/img/Icons/green_play.svg';
import HomeBanarImg from '../../../../assets/img/homepage/home_banar.svg';
import blueLight from '../../../../assets/img/homepage/Blue_light.svg';
import Button from '@mui/material/Button';

function HomeBanar() {
    return ( 
        <div className='home_banar_area'>
            <img src={blueLight} alt="BlueLight" className="home_banar_light" />
                <div className="offet_notify">
                    Get 50% OFF on Any New Purchase, Discount Already Applied.
                </div>
            <div className="banar_container">
                <div className="banar_content">
                    <h1 className='colW fz68'>World's Awarded Best </h1>
                    <h2 className='colG fz59'>Cell Phone Spy & PC Monitoring App</h2>
                    <p className='colW'>Curabitur vulputate arcu odio, ac facilisis diam accumsan ut. Ut imperdiet et leo in vulputate. Sed eleifend lacus eu sapien sagittis  imperdiet. Etiam tempor mollis augue, ut tincidunt ex interdum eu. u</p>
                    <div className="banar_btn">
                        <Button variant="contained" href="#" color="success"className='lightGreenBtn'>View Plan & Pricing</Button>
                        <Button href="#" color="success"className='white_text_btn'><img src={PlayIcon} alt="Play" /> Live Demo</Button>
                    </div>
                </div>
                <img src={HomeBanarImg} alt="" className="homeBanar_img" />
            </div>
        </div>
     );
}

export default HomeBanar;