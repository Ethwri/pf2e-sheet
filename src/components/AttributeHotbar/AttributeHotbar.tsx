import * as React from 'react';
import './AttributeHotbar.css';
import Attributes from '../Attributes/Attributes';
import { AttributeResponse } from 'src/lib/api/types';

export default class AttributeHotbar extends React.Component {
  state: AttributeResponse[] = [
    { name: 'mmm', base: 0, modifier: 0 },
    { name: 'mmm', base: 0, modifier: 0 },
    { name: 'mmm', base: 0, modifier: 0 },
    { name: 'mmm', base: 0, modifier: 0 },
    { name: 'mmm', base: 0, modifier: 0 },
    { name: 'mmm', base: 0, modifier: 0 }
  ];

  componentWillMount() {
    this.getAttributes();
  }

  getAttributes: any = () => {
    fetch('http://localhost:1234/attributes', {
      cache: 'no-cache',
      mode: 'cors',
      credentials: 'same-origin'
    })
      .then((response) => response.json())
      .then((response: AttributeResponse[]) => this.setState(response));
  };

  render() {
    return (
      <div className="attribute-hotbar">
        <Attributes
          name={this.state[0].name.toUpperCase()}
          base={this.state[0].base}
          modifier={this.state[0].modifier}
        />
        <Attributes
          name={this.state[1].name.toUpperCase()}
          base={this.state[1].base}
          modifier={this.state[1].modifier}
        />
        <Attributes
          name={this.state[2].name.toUpperCase()}
          base={this.state[2].base}
          modifier={this.state[2].modifier}
        />
        <Attributes
          name={this.state[3].name.toUpperCase()}
          base={this.state[3].base}
          modifier={this.state[3].modifier}
        />
        <Attributes
          name={this.state[4].name.toUpperCase()}
          base={this.state[4].base}
          modifier={this.state[4].modifier}
        />
        <Attributes
          name={this.state[5].name.toUpperCase()}
          base={this.state[5].base}
          modifier={this.state[5].modifier}
        />
      </div>
    );
  }
}
