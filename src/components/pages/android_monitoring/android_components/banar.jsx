import React from 'react';

// MUI
import Button from '@mui/material/Button';

// Images
import Android_Banar from '../../../../assets/img/android_monitoring_page/Banar_1.svg';
import FeatherCheck from '../../../../assets/img/Icons/feather-check-circle.svg';


function AndroidBanar() {
    return ( 
        <div className="android_banar_area banar_1">
            <div className="banar_container">
                <div className="row">
                    <img src={Android_Banar} alt="Android Banar" className='andbanarLeftImg' />
                    <div className="AndrRightCont">
                        <h1 className='fz72'>World’s No.1 </h1>
                        <h2 className="fz50">Tried & trusted spy app for Android </h2>
                        <h4 className="fz24">A sigh of relief for parents & a sign of security for business professionals! </h4>
                        <ul className="android_feature">
                            <li>
                                <img src={FeatherCheck} alt="Check" />
                                Live call recording incoming & outgoing 
                            </li>
                            <li>
                                <img src={FeatherCheck} alt="Check" />
                                Live GPS location tracker features 
                            </li>
                            <li>
                                <img src={FeatherCheck} alt="Check" />
                                Real-time keystrokes logging  
                            </li>
                            <li>
                                <img src={FeatherCheck} alt="Check" />
                                Live surround listening 
                            </li>
                            <li>
                                <img src={FeatherCheck} alt="Check" />
                                Live camera streaming 
                            </li>
                        </ul>
                        <div className="android_btn dualBtn">
                            <Button variant="contained" className='BlueBtn'>Try Android Spy</Button>
                            <Button variant="outlined" className='blueLLineBtn colBLack'>Demo</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default AndroidBanar;