import React from 'react';

import MobileSms from '../../../../assets/img/homepage/MobileSms.svg';
import call from '../../../../assets/img/Icons/call.svg';
import location from '../../../../assets/img/Icons/location.svg';
import message from '../../../../assets/img/Icons/message.svg';

function MonitoringFeature() {
    return ( 
        <div className="monitoring_fea">
            <div className="monitoring_container">
                <div className="monito_content">
                    <img src={MobileSms} alt="monitor_img" className="monitor_img" />
                    <div className="monitor_text">
                        <h2 className="fz64">Our Monitoring Features</h2>
                        <p className='fw3'>Get ready in no time... just like 1, 2 & 3.</p>
                        <div className="feature_content">
                            <ul className="featire_list">
                                <li className="feature_item">
                                    <span className="feature_icon" ><img src={call} alt="" /></span>
                                    <div className="feature_content_box">
                                        <h3>Call Recording</h3>
                                        <p className="fz25">Visit TheOneSpy webpage, select solution, and tap on buy now to select price plan.</p>
                                    </div>
                                </li>
                                <li className="feature_item">
                                    <span className="feature_icon" ><img src={location} alt="" /></span>
                                    <div className="feature_content_box">
                                        <h3>Live Location</h3>
                                        <p className="fz25">Visit TheOneSpy webpage, select solution, and tap on buy now to select price plan.</p>
                                    </div>
                                </li>
                                <li className="feature_item">
                                    <span className="feature_icon" ><img src={message} alt="" /></span>
                                    <div className="feature_content_box">
                                        <h3>Monitor Messages</h3>
                                        <p className="fz25">Visit TheOneSpy webpage, select solution, and tap on buy now to select price plan.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default MonitoringFeature;