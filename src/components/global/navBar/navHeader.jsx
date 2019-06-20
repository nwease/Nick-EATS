import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from '../../../images/logo.png'
import { FaAlignRight } from 'react-icons/fa'
import styled from 'styled-components'
import { styles } from '../../../utils'

class NavHeader extends Component {
  render() {

    const {handleNavBar} = this.props;

    return (
      <HeaderWrapper>
        <Link to='/'>
          <img className='logo' src={logo} alt='Company Name' />
        </Link>

        <FaAlignRight
          className='toggle-icon'
          onClick={() => {
            handleNavBar()
          }}
        />
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div `
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  .toggle-icon {
    font-size: 1.75rem;
    color: ${styles.colors.mainYellow};
    cursor: pointer;
  }
  
  //.logo {
  //  height: 38px;
  //  width: 149px;
  //}
  
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`

export default NavHeader