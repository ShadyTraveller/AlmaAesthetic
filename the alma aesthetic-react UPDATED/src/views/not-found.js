import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import './not-found.css'

const NotFound = (props) => {
  return (
    <div className="not-found-container1">
      <Helmet>
        <title>404 - Not Found</title>
      </Helmet>
      <Navigation></Navigation>
      <div className="not-found-inner">
        <h3 className="not-found-heading">Page not found</h3>
        <div className="not-found-container2">
          <h1 className="not-found-text2">404</h1>
        </div>
        <div className="not-found-container3">
          <h2 className="not-found-text3">
            The page you requested does not exist or has been moved.
          </h2>
          <Link to="/">
            <div className="btn-primary btn btn-lg not-found-home-btn">
              <span>Return home</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
