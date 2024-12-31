import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div style={{height:'300px'}} className='mt-5 container w-100'>
      <div className='d-flex justify-content-between'>
        {/* intro */}
        <div style={{width:'400px'}}>
          <h5><i class="fa-solid fa-music me-3"></i>
          Media Player</h5>
          <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>
        {/* Links */}
        <div className='d-flex flex-column'>
          <h5>Links</h5>
          <Link to={'/'} style={{textDecoration:'none' , color:'white'}} >Landing Page</Link>
          <Link to={'/home'} style={{textDecoration:'none' , color:'white'}} >Home Page</Link>
          <Link to={'/history'} style={{textDecoration:'none' , color:'white'}} >Watch History Page</Link>



        </div>
        {/* guides */}
        <div className='d-flex flex-column'>
          <h5>Guides</h5>
          <a style={{textDecoration:'none' , color:'white'}} target='-blank' href="https://react.dev/">React</a>
          <a style={{textDecoration:'none' , color:'white'}} target='-blank' href="https://react-bootstrap.netlify.app/">React bootstrap</a>
          <a style={{textDecoration:'none' , color:'white'}} target='-blank' href="https://www.npmjs.com/package/react-router-dom">React-router-dom</a>
        </div>


        {/* contact */}
        <div className='d-flex flex-column'>
          <h5>Contacts</h5>
          <div className='d-flex'>
          <input className='form-control me-2' type="text" placeholder='Enter your email address' />
          <button className='btn btn-info'><i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className='d-flex mt-3'>
            <a className='btn me-1' style={{textDecoration:'none' , color:'white'}} href="https://github.com/" target='-blank'><i class="fa-brands fa-github"></i></a>
            <a className='btn me-1' style={{textDecoration:'none' , color:'white'}} href="https://www.instagram.com/_athul.ganesh_/" target='-blank'><i class="fa-brands fa-instagram"></i></a>
            <a className='btn me-1' style={{textDecoration:'none' , color:'white'}} href="https://en.wikipedia.org/wiki/Twitter" target='-blank'><i class="fa-brands fa-twitter"></i></a>
            <a className='btn me-1' style={{textDecoration:'none' , color:'white'}} href="https://www.facebook.com/" target='-blank'><i class="fa-brands fa-facebook"></i></a>
            <a className='btn me-1' style={{textDecoration:'none' , color:'white'}} href="https://web.whatsapp.com/" target='-blank'><i class="fa-brands fa-whatsapp"></i></a>
            <a className='btn me-1' style={{textDecoration:'none' , color:'white'}} target='-blank' href="https://www.linkedin.com/feed/"><i class="fa-brands fa-linkedin"></i></a>

          </div>
        </div>





      </div>
    </div>
  )
}

export default Footer