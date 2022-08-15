import React from 'react';

// AndroidMonitoring Components
import AndroidBanar from './android_components/banar';
import FeatureIn from './android_components/FeatureIn';
import AboutSpyApp from './android_components/AboutSpyApp';
import SocialMediaMonitor from './android_components/SocialMediaMonitor';
import SatisfiedCustomers from './android_components/SatisfiedCustomers';
import BuyOneSpy from './android_components/BuyOneSpy';

function AndroidMonitoringPage() {
    return ( 
        <section className="android_monitorin_page">
            <AndroidBanar/>
            <FeatureIn/>
            <AboutSpyApp/>
            <SocialMediaMonitor/>
            <SatisfiedCustomers/>
            <BuyOneSpy/>
        </section>
     );
}

export default AndroidMonitoringPage;