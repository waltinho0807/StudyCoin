import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';


export default class MenuExampleInverted extends Component {
  state = { activeItem: 'StudyCoin' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <a href="/">
          <Menu.Item
            name='StudyCoin'
            active={activeItem === 'StudyCoin'}
            onClick={this.handleItemClick}
          />
        </a>
        <a href="/sobre">
          <Menu.Item
            name='Sobre'
            active={activeItem === 'Sobre'}
            onClick={this.handleItemClick}
          />
        </a>

        <a href="/">
          <Menu.Item
            name='Comprar'
            active={activeItem === 'Comprar'}
            onClick={this.handleItemClick}
          />
        </a>

        <a href="/vender">
          <Menu.Item
            name='Vender'
            active={activeItem === 'Vender'}
            onClick={this.handleItemClick}
          />
        </a>

      </Menu>
    )
  }
}