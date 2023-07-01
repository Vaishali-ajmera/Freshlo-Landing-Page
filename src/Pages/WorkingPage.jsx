import React from 'react'
import "./WorkingPage.css"
import Working from '../components/Working'

const WorkingPage = () => {
  return (
    <div className='working-page '>
        <div className="overlay"></div>
        <h2 className='working-heading'>How it works?</h2>
        <Working />
    </div>
  )
}

export default WorkingPage