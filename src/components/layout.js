import React from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components'
// import { createGlobalStyle } from 'styled-components'
import NavBar from './global/navBar'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      {/*<GlobalStyle />*/}
      {children}
      <NavBar/>
    </React.Fragment>
  )
}

// const GlobalStyle = createGlobalStyle `
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
// }
//
// body {
//     font-family: 'open Sans', sans-serif;
//     color: red;
//     background: #fff;
// }
// `

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
