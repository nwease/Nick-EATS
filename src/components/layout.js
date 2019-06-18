import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'
import NavBar from './global/navBar'
// import './bootstrap.min.css'
// import './layout.css'
// import './sass/layout.scss'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <NavBar/>
      {children}
    </React.Fragment>
  )
}

const GlobalStyle = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'open Sans', sans-serif;
    color: red;
    background: #fff;
}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
