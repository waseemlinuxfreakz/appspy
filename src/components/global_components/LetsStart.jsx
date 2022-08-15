import React from 'react';
import Button from '@mui/material/Button';
function LetsStart() {
    return ( 
        <div className="viewPlan_area">
            <div className="viewPlanContainer colW">
                <div className="viewPlanContent">
                    <h2 className='fz69'>Let’s Start</h2>
                    <p className="fz30 fw3">Free way to see who is doing what and for how long !</p> 
                </div>
                <div className="viewPlanBtn">
                    <Button href="#" color="success"className='whiteBtn colG'>View Plan & Pricing</Button>
                </div>
            </div>
        </div>
     );
}

export default LetsStart;