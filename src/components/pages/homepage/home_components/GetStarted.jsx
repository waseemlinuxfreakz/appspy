import React from 'react';

import GetStart_1 from '../../../../assets/img/homepage/getStarted_1.svg';
import GetStart_2 from '../../../../assets/img/homepage/getStarted_2.svg';
import GetStart_3 from '../../../../assets/img/homepage/getStarted_3.svg';
import GetStart_4 from '../../../../assets/img/homepage/getStarted_4.svg';
import Mobilef4steep from '../../../../assets/img/homepage/Mobilef4steep.svg';



function GetStarted() {
    return ( 
        <div className="get_started_area">
            <div className="container">
                <div className="get_start_row row">
                    <div className="getStart_content">
                        <h2 className="fz64">Get Started in 4 Steps</h2>
                        <p className="fw3">Get ready in no time... just like 1, 2 & 3.</p>
                        <ul className="get_start_feature">
                            <li className="getStart_fea_item">
                                <img src={GetStart_1} alt="getStart" className="get_start_icon" />
                                <div className="getFeaCont">
                                    <p className="fw5 fz34">Select Pricing Plan</p>
                                    <p className='fz25 fw3'>Visit TheOneSpy webpage, select solution, and tap on buy now to select price plan.</p>
                                </div>
                            </li>
                            <li className="getStart_fea_item">
                                <img src={GetStart_2} alt="getStart" className="get_start_icon" />
                                <div className="getFeaCont">
                                    <p className="fw5 fz34">Get Welcome Email</p>
                                    <p className='fz25 fw3'>Check your email inbox, and get welcome email alongside the user name & ID.</p>
                                </div>
                            </li>
                            <li className="getStart_fea_item">
                                <img src={GetStart_3} alt="getStart" className="get_start_icon" />
                                <div className="getFeaCont">
                                    <p className="fw5 fz34">Download & Install in 3 Mins.</p>
                                    <p className='fz25 fw3'>Download TheOneSpy on target device & end up with installation in 3 minutes.</p>
                                </div>
                            </li>
                            <li className="getStart_fea_item">
                                <img src={GetStart_4} alt="getStart" className="get_start_icon" />
                                <div className="getFeaCont">
                                    <p className="fw5 fz34">Start Monitoring with Ease</p>
                                    <p className='fz25 fw3'>Access the dashboard using credentials, and activate features, & start surveillance.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <img src={Mobilef4steep} alt="Mobilef4steep" className="getStartMobile" />
                </div>
            </div>
        </div>
     );
}

export default GetStarted;