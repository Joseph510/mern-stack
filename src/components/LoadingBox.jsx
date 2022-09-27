import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import '../styles/messagebox.css'
const LoadingBox = () => {
  return (
    <div>
        <>
        <Navbar/>
          <div className="message-container">
            <h2 className='messageLoading'>Loading ...</h2>
          </div>
        <Footer/>
        </>
    </div>
  )
}

export default LoadingBox