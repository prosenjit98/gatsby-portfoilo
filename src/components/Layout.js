import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout(props) {
  return (
    <div className='layout'>
      <Navbar />
      <div className="container">
        {props.children}
      </div>
      <footer>
        <p>Copyrigth @2021</p>
      </footer>
    </div>
  )
}
