import React from 'react';

// MUI
import Button from '@mui/material/Button';

function BuyOneSpy() {
    return ( 
        <div className="buyonespy_area">
            <div className="buyonespy_container">
                <h2 className="fz50">TheOneSpy is your Eyes and Ears behind  <br />Walls & the Locked Doors</h2>
                <div className="dualBtn">
                    <Button variant="outlined" className='WhiteBtn'>Buy Now</Button>
                    <Button variant="outlined" className='blueLLineBtn colW'>Demo</Button>
                </div>
            </div>
        </div>
     );
}

export default BuyOneSpy;