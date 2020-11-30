import React from 'react'
import react from '../../images/blog/react.png';
import js from '../../images/blog/js.png';
function Blog() {
    return (
        <div id="blog" className="container">
                  <div class=" pt-4 pb-4 title  d-flex justify-content-center align-items-center">
                    <h2>My Blogs</h2>
                </div> 
                
                <div class="card-deck">
              <div className="col-9 col-sm-9 col-md-6 col-lg-6 col-xl-4">

           
  <div class="card">
    <img className="      img-fluid card-img-top" src={js} alt="..."/>
    <div class="card-body">
      <h5 class="card-title text-center text text-white">Top 10 Things For Beginners About JavaScript</h5>
      <p class="card-text text-center text-white ">JavaScript is one of the most popular programming language</p>

      <div className="text-center">
      <a href='https://hasibulislam1670.medium.com/top-10-things-for-beginners-about-javascript-38a3946cc610' class="btn1 btn  blog-btn ">Read</a> 
    
      </div>

    </div>
  </div>
  </div>

  <div className='col-9 col-sm-9 col-md-6 col-lg-6 col-xl-4'>
  <div class="card">
    <img className="      img-fluid card-img-top" src={react}  alt="..."/>
    <div class="card-body">
      <h5 class="card-title text-center text text-white">Let’s Start a Journey With React</h5>
      <p class="card-text text-center text-white ">React is an open-source, front end, JavaScript library for building user interfaces or UI components</p>

      <div className="text-center">
      <a href="https://hasibulislam1670.medium.com/lets-start-a-journey-with-react-7bac7e5093d0" class="btn1 btn blog-btn ">Read</a> 
     
      </div>

    </div>
  </div>
</div>

</div>



        </div>
    )
}

export default Blog
