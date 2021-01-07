import * as React from 'react';
import './Attributes.css';
import {AttributeResponse} from '../../lib/api/types'


function Attributes (props: AttributeResponse) { 
    return (
    
        <div className="attribute-block" id="attribute-str">
            <span className="attribute-label">{props.name}</span>
            <div className="attribute-mod">{props.modifier}</div>
            <div className="attribute-main">{props.base}</div>
        </div>        
    
    );
}

export default Attributes;