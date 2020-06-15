import React from "react"
import PropTypes from "prop-types"

import "../styles/layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className="container-fluid">
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
