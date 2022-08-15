import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Lock from '../../../../assets/img/android_monitoring_page/Featuredin/Lock.svg';
import History from '../../../../assets/img/android_monitoring_page/Featuredin/History.svg';
import Block from '../../../../assets/img/android_monitoring_page/Featuredin/Block.svg';
import Filter from '../../../../assets/img/android_monitoring_page/Featuredin/Filter.svg';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            className='ScreenTabContent'
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Record, listen to & watch" {...a11yProps(0)} />
                    <Tab label="View 360" {...a11yProps(1)} />
                    <Tab label="Screen Time" {...a11yProps(2)} />
                    <Tab label="Location Tracker" {...a11yProps(3)} />
                    <Tab label="Keystrokes" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <div className="tabContent">
                    <div className="tab_container">
                        <div className="tabrow">
                            <div className="screenImg">
                                <img src={ } />
                            </div>
                            <div className="ScreebContent">
                                <h2 className="fz64">Screen Time</h2>
                                <p>Android spy is an advanced app that you can install on the
                                    target phone to bring insights to parents about target phones
                                    and build a healthy and safe digital environment.
                                </p>
                                <ul className="screenFeature">
                                    <li>
                                        <img src={Lock} />
                                        <p>Lock <br />
                                            Device</p>
                                    </li>
                                    <li>
                                        <img src={History} />
                                        <p>Browsing <br />
                                            History
                                        </p>
                                    </li>
                                    <li>
                                        <img src={Block} />
                                        <p>Block <br />
                                            Website</p>
                                    </li>
                                    <li>
                                        <img src={Filter} />
                                        <p>Filter <br />
                                            Website</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className="tabContent">
                    <div className="tab_container">
                        <div className="tabrow">
                            <div className="screenImg">
                                <img src={ } />
                            </div>
                            <div className="ScreebContent">
                                <h2 className="fz64">Screen Time</h2>
                                <p>Android spy is an advanced app that you can install on the
                                    target phone to bring insights to parents about target phones
                                    and build a healthy and safe digital environment.
                                </p>
                                <ul className="screenFeature">
                                    <li>
                                        <img src={Lock} />
                                        <p>Lock <br />
                                            Device</p>
                                    </li>
                                    <li>
                                        <img src={History} />
                                        <p>Browsing <br />
                                            History
                                        </p>
                                    </li>
                                    <li>
                                        <img src={Block} />
                                        <p>Block <br />
                                            Website</p>
                                    </li>
                                    <li>
                                        <img src={Filter} />
                                        <p>Filter <br />
                                            Website</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <div className="tabContent">
                    <div className="tab_container">
                        <div className="tabrow">
                            <div className="screenImg">
                                <img src={ } />
                            </div>
                            <div className="ScreebContent">
                                <h2 className="fz64">Screen Time</h2>
                                <p>Android spy is an advanced app that you can install on the
                                    target phone to bring insights to parents about target phones
                                    and build a healthy and safe digital environment.
                                </p>
                                <ul className="screenFeature">
                                    <li>
                                        <img src={Lock} />
                                        <p>Lock <br />
                                            Device</p>
                                    </li>
                                    <li>
                                        <img src={History} />
                                        <p>Browsing <br />
                                            History
                                        </p>
                                    </li>
                                    <li>
                                        <img src={Block} />
                                        <p>Block <br />
                                            Website</p>
                                    </li>
                                    <li>
                                        <img src={Filter} />
                                        <p>Filter <br />
                                            Website</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <div className="tabContent">
                    <div className="tab_container">
                        <div className="tabrow">
                            <div className="screenImg">
                                <img src={ } />
                            </div>
                            <div className="ScreebContent">
                                <h2 className="fz64">Screen Time</h2>
                                <p>Android spy is an advanced app that you can install on the
                                    target phone to bring insights to parents about target phones
                                    and build a healthy and safe digital environment.
                                </p>
                                <ul className="screenFeature">
                                    <li>
                                        <img src={Lock} />
                                        <p>Lock <br />
                                            Device</p>
                                    </li>
                                    <li>
                                        <img src={History} />
                                        <p>Browsing <br />
                                            History
                                        </p>
                                    </li>
                                    <li>
                                        <img src={Block} />
                                        <p>Block <br />
                                            Website</p>
                                    </li>
                                    <li>
                                        <img src={Filter} />
                                        <p>Filter <br />
                                            Website</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <div className="tabContent">
                    <div className="tab_container">
                        <div className="tabrow">
                            <div className="screenImg">
                                <img src={ } />
                            </div>
                            <div className="ScreebContent">
                                <h2 className="fz64">Screen Time</h2>
                                <p>Android spy is an advanced app that you can install on the
                                    target phone to bring insights to parents about target phones
                                    and build a healthy and safe digital environment.
                                </p>
                                <ul className="screenFeature">
                                    <li>
                                        <img src={Lock} />
                                        <p>Lock <br />
                                            Device</p>
                                    </li>
                                    <li>
                                        <img src={History} />
                                        <p>Browsing <br />
                                            History
                                        </p>
                                    </li>
                                    <li>
                                        <img src={Block} />
                                        <p>Block <br />
                                            Website</p>
                                    </li>
                                    <li>
                                        <img src={Filter} />
                                        <p>Filter <br />
                                            Website</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>
        </Box>
    );
}
