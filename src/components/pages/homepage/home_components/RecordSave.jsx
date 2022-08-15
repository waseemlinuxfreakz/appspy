import React from 'react';

import RecordBlueLight from '../../../../assets/img/homepage/Blue_light_2.svg';
import RecordIcon from '../../../../assets/img/homepage/CallLogs.svg';
import Button from '@mui/material/Button';

function RecordSave() {
    return (
        <div className="recode_save_area">
            <img src={RecordBlueLight} alt="" className="recordBlueLight" />
            <div className="section_title text-center colW">
                <p>Stop scratching your Head</p>
                <h2 className="fz60">Record, Listen, Save & Monitor</h2>
            </div>
            <div className="recoder_container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="record_box colW">
                            <img src={RecordIcon} alt="Record Icon" />
                            <p className="fz30">Surround listening </p>
                            <p>Track and record live phone
                                calls, and get the logs of each
                                call on the target device with
                                the schedule.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="record_box colW">
                            <img src={RecordIcon} alt="Record Icon" />
                            <p className="fz30">Surround listening </p>
                            <p>Track and record live phone
                                calls, and get the logs of each
                                call on the target device with
                                the schedule.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="record_box colW">
                            <img src={RecordIcon} alt="Record Icon" />
                            <p className="fz30">Surround listening </p>
                            <p>Track and record live phone
                                calls, and get the logs of each
                                call on the target device with
                                the schedule.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="record_box colW">
                            <img src={RecordIcon} alt="Record Icon" />
                            <p className="fz30">Surround listening </p>
                            <p>Track and record live phone
                                calls, and get the logs of each
                                call on the target device with
                                the schedule.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="record_box colW">
                            <img src={RecordIcon} alt="Record Icon" />
                            <p className="fz30">Surround listening </p>
                            <p>Track and record live phone
                                calls, and get the logs of each
                                call on the target device with
                                the schedule.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="record_box colW">
                            <img src={RecordIcon} alt="Record Icon" />
                            <p className="fz30">Surround listening </p>
                            <p>Track and record live phone
                                calls, and get the logs of each
                                call on the target device with
                                the schedule.</p>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <Button variant="contained" href="#" color="success"className='lightGreenBtn'>View More Features</Button>
                </div>
            </div>
        </div>
    );
}

export default RecordSave;