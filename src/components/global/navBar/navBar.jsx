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
      <NavWrapper>
        <NavHeader handleNavBar={this.handleNavBar} />
        <NavLinks navBarOpen={this.state.navBarOpen} />
        <NavIcon />
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav `
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`

export default NavBar