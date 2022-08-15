import React from 'react';

import SocialMedia from '../../../../assets/img/android_monitoring_page/Social Media monitor.svg';

function SocialMediaMonitor() {
    return (
        <div className="social_medial_monitor">
            <div className="container">
                <div className="socialmonitorcont">
                    <img src={SocialMedia} alt="SocialMedia" />
                    <h2 className="fz64">Social Media Monitoring</h2>
                    <p>Android spy is an advanced app that you can install on the target phone to bring insights to parents about
                        target phones and build a healthy and safe digital environment for kids with an advanced set of spying and
                        monitoring tools. </p>
                </div>
            </div>
        </div>
    );
}

export default SocialMediaMonitor;