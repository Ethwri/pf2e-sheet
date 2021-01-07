import * as React from 'react';
import './AttributeHotbar.css';
import Attributes from '../Attributes/Attributes'
import {AttributeResponse} from '../../lib/api/types'



function AttributeHotbar () { 
    return (
    <div className="attribute-hotbar">
         <Attributes name="STR" base={10} modifier={0} />   
         <Attributes name="DEX" base={10} modifier={0} />  
         <Attributes name="CON" base={15} modifier={4} />  
         <Attributes name="INT" base={10} modifier={0}/>  
         <Attributes name="WIS" base={10} modifier={0}/>  
         <Attributes name="CHA" base={10} modifier={0}/>  
    </div>
    );
}

export default AttributeHotbar;