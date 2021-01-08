import * as React from 'react';
import './AttributeHotbar.css';
import Attributes from '../Attributes/Attributes';
import { AttributeResponse } from 'src/lib/api/types';

export default class AttributeHotbar extends React.Component {
  state: any = { data: [] };

  componentWillMount() {
    this.getAttributes();
  }

  getAttributes: React.EffectCallback = () => {
    fetch('http://localhost:1234/attributes', {
      cache: 'no-cache',
      mode: 'cors',
      credentials: 'same-origin'
    })
      .then((response) => response.json())
      .then((response: AttributeResponse[]) =>
        this.setState({ data: response })
      );
  };

  render() {
    return (
      <div className="attribute-hotbar">
        {this.state.data.map((attribute: AttributeResponse) => (
          <Attributes
            name={attribute.name.toUpperCase()}
            base={attribute.base}
            modifier={attribute.modifier}
          />
        ))}
        ;
      </div>
    );
  }
}
