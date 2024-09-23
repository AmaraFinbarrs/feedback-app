import React from 'react'
import PropTypes from 'prop-types'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage(props) {
  return (
    <Card>
      <div className='about'>
        <h1>About</h1>
        <p>
          This is a simple feedback app that allows users to submit feedback and view feedback statistics.
        </p>
        <p>
          This app was built using React, React Router, and Bootstrap.
        </p>
        <Link to="/">Back to Home</Link>
      </div>
    </Card>
  )
}

AboutPage.propTypes = {

}

export default AboutPage

