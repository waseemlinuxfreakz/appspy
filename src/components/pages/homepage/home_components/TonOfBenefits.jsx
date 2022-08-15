import React from 'react';

import Benefits_1 from '../../../../assets/img/homepage/benefits_1.svg';
import Benefits_2 from '../../../../assets/img/homepage/benefits_2.svg';
import Benefits_3 from '../../../../assets/img/homepage/benefits_3.svg';
import Benefits_4 from '../../../../assets/img/homepage/benefits_4.svg';


function ToneOfBenefits() {
    return (
        <div className="benefits_contaner">
            <div className="section_title text-center ">
                <h2 className="fz64">Ton of benefits</h2>
                <p>Spend your time & Money More wisely! Try TheOneSpy!</p>
            </div>
            <div className="benefits_container">
                <div className="row">
                    <div className="benefit_col">
                        <div className="benefitsBox">
                            <img src={Benefits_1} alt="Benefits" />
                            <h3 className="fz34 fw5">Performance</h3>
                            <p className='fz25 fw3'>Instant and result oriented
                                operations via TheOneSpy
                                powerful features &
                                dashboard.</p>
                        </div>
                    </div>
                    <div className="benefit_col">
                        <div className="benefitsBox">
                            <img src={Benefits_2} alt="Benefits" />
                            <h3 className="fz27 fw5">Real-Time Data</h3>
                            <p className='fz22 fw3'>Get the complete insight into the cellphone, and collect the information in real-time.</p>
                        </div>
                    </div>
                    <div className="benefit_col">
                        <div className="benefitsBox">
                            <img src={Benefits_3} alt="Benefits" />
                            <h3 className="fz27 fw5">Sneaky Operations</h3>
                            <p className='fz22 fw3'>Get the complete insight into the cellphone, and collect the information in real-time.</p>
                        </div>
                    </div>
                    <div className="benefit_col">
                        <div className="benefitsBox">
                            <img src={Benefits_4} alt="Benefits" />
                            <h3 className="fz27 fw5">Antivirus Proof</h3>
                            <p className='fz22 fw3'>Get the complete insight into the cellphone, and collect the information in real-time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToneOfBenefits;