import React from 'react';
import HomeBanar from './home_components/banar';
import RecordSave from './home_components/RecordSave';
import MonitoringFeature from './home_components/MonitoringFeatures';
import GetStarted from './home_components/GetStarted';
import ToneOfBenefits from './home_components/TonOfBenefits';
import OriginReviews from './home_components/OriginReviews';
import Accordion from './home_components/FAQ.jsx';
import OsDevices from './home_components/OSDevices';
// import TestSlider from './home_components/TestSlider';



function HomePage() {
    return ( 
        <section className="home_page_area">
            {/* <TestSlider/> */}
            <HomeBanar/>
            <RecordSave/>
            <MonitoringFeature/>
            <GetStarted/>
            <ToneOfBenefits/>
            <OriginReviews/>
            <Accordion/>
            <OsDevices/>
        </section>
     );
}

export default HomePage;