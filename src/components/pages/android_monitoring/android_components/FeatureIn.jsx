import React from 'react';

import cbsnews from '../../../../assets/img/android_monitoring_page/Featuredin/cbsnews.svg';
import mashable from '../../../../assets/img/android_monitoring_page/Featuredin/mashable.svg';
import bbc from '../../../../assets/img/android_monitoring_page/Featuredin/BBC-01-1.svg';
import usatoday from '../../../../assets/img/android_monitoring_page/Featuredin/usatoday.svg';
import forbes from '../../../../assets/img/android_monitoring_page/Featuredin/forbes.svg';


function FeatureIn() {
    return ( 
        <div className="feature_in_container">
            <div className="container">
                <div className="section_title">
                    <h3 className="fz28 fw5">Featured in</h3>
                    <ul className="feature_list">
                        <li className="feature_Brand">
                            <img src={cbsnews} alt="Feature Brand" />
                        </li>
                        <li className="feature_Brand">
                            <img src={mashable} alt="Feature Brand" />
                        </li>
                        <li className="feature_Brand">
                            <img src={bbc} alt="Feature Brand" />
                        </li>
                        <li className="feature_Brand">
                            <img src={usatoday} alt="Feature Brand" />
                        </li>
                        <li className="feature_Brand">
                            <img src={forbes} alt="Feature Brand" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     );
}

export default FeatureIn;