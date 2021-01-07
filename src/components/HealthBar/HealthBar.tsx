import * as React from 'react';
import './HealthBar.css';

export default function HealthBar() {
    return (    
        <div className="health-hotbar">
        <small>HEALTH</small>
        <div className="healthbar">
            <div className="current-health"></div>
        </div>
        <small>current/maximum</small>
        {/* current needs to change the width of the css style */}

    </div>
    )
}

