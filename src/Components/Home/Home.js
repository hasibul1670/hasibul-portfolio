import React from 'react'
import About from '../About/About'
import Blog from '../Blog/Blog'
import Hader from '../Hader/Hader'
import Navbar from '../Navbar/Navbar'
import Project from '../Project/Project'


function Home() {
    return (

        <div>

          <div className="">
          <Navbar></Navbar>
          </div>

          <div className="color">
          <Hader></Hader>
          <Project></Project>
          <Blog></Blog>
          <About></About>
          </div>
 
        </div>
    )
}

export default Home
