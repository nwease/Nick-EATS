import React, { Component } from 'react'
import NavHeader from './navHeader'
import NavLinks from './navLinks'
import NavIcon from './navIcon'
import styled from 'styled-components'

class NavBar extends Component {

  state = {
    navBarOpen: false
  }

  handleNavBar = () => {
    this.setState(() => {
      return {navBarOpen: !this.state.navBarOpen}
    })
  }

  render() {
    return (
      <nav>
        <NavHeader handleNavBar={this.handleNavBar} />
        <NavLinks navBarOpen={this.state.navBarOpen} />
        <NavIcon />
      </nav>
    )
  }
}

const navWrapper = styled.div `

`

export default NavBar