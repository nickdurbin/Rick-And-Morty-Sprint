import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

export default class TabNav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='characters'
            active={activeItem === 'characters'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='location'
            active={activeItem === 'location'}
            onClick={this.handleItemClick}
          />
            <Menu.Item
            name='episodes'
            active={activeItem === 'episodes'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
