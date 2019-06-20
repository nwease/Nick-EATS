import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { styles } from '../../../utils'

class NavLinks extends Component {

  state = {
    links: [
      {
        id: 0,
        path: '/',
        name: 'home'
      },

      {
        id: 1,
        path: '/about/',
        name: 'about'
      },

      {
        id: 2,
        path: '/menu/',
        name: 'menu'
      },

      {
        id: 3,
        path: '/contact/',
        name: 'contact'
      }
    ]
  }

  render() {
    return (
      <LinkWrapper open={this.props.navBarOpen}>
        {
          this.state.links.map(item => {
            return (
              <li key={item.id}>
                <Link className='nav-link' to={item.path}>
                  {item.name}
                </Link>
              </li>
            )
          })
        }
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul `
  li {
    list-style-type: none;
  }
`

export default NavLinks