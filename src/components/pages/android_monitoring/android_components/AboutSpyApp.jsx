import React from 'react';

// MUI
import Button from '@mui/material/Button';

import SpyApp from '../../../../assets/img/android_monitoring_page/spyapp.svg';

function AboutSpyApp() {
    return (
        <div className="aboutSpyApp">
            <div className="container">
                <div className="row">
                    <div className="aboutSpyCont">
                        <h2 className="fz64">What is Android spy app? </h2>
                        <p>Android spy is an advanced app that you can install on the
                            target phone to bring insights to parents about target phones
                            and build a healthy and safe digital environment for kids with
                            an advanced set of spying and monitoring tools. Users can
                            protect their kids from online predators and inappropriate
                            activities, like online dating, pornography, and sexting.
                        </p>
                        <div className="dualBtn">
                            <Button variant="contained" className='BlueBtn'>Buy Now</Button>
                            <Button variant="outlined" className='blueLLineBtn colBLack'>Demo</Button>
                        </div>
                    </div>
                    <div className="aboutSpyImg">
                        <img src={SpyApp} alt="aboutSpyImg" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSpyApp;