import React from 'react'
import PropTypes from 'prop-types'
// import './bootstrap.min.css'
// import './layout.css'
import './sass/layout.scss'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
