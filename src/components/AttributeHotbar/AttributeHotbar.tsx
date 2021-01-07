import * as React from 'react';
import './AttributeHotbar.css';
import Attributes from '../Attributes/Attributes'
import { AttributeListResponse,  AttributeResponse} from 'src/lib/api/types';



export default class AttributeHotbar extends React.Component { 
    state: AttributeResponse = {name:'str', base:0, modifier:0};
    getAttributes: React.EffectCallback = () => {
        fetch('http://localhost:1234/attributes', {
          cache: 'no-cache',
          mode: 'cors',
          credentials: 'same-origin'
        })
          .then((response) => response.json())
          .then((response: AttributeResponse) =>
            this.setState({
              name: response.name,
              base: response.base,
              modifier: response.modifier
            })
          );
      };

    render() {
        this.getAttributes();
        return (    
        <div className="attribute-hotbar">
            
            <Attributes name={this.state.name} base={this.state.base} modifier={this.state.modifier} />   
            <Attributes name="DEX" base={10} modifier={0} />  
            <Attributes name="CON" base={15} modifier={4} />  
            <Attributes name="INT" base={10} modifier={0}/>  
            <Attributes name="WIS" base={10} modifier={0}/>  
            <Attributes name="CHA" base={10} modifier={0}/>  
        </div>
        );
}
}