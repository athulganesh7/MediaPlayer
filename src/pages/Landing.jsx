import React from 'react'
import { Link } from 'react-router-dom'
import LandingImg from '../assets/MusicBeat.gif'
import feature1 from '../assets/feature1.jpeg'
import feature2 from '../assets/feature2.jpg'
import feature3 from '../assets/feature3.webp'
import { Card } from 'react-bootstrap'


const Landing = () => {
  return (
    <div style={{ paddingTop: '100px' }} className='container'>
      {/* landing part */}
      <div className='row align-items-center'>
        <div className='col-lg-5'>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p>Media Player Supports many video and music formats, including mp3, mp4, wmv, avi, mkv, dv, rm, mp, and mpeg. It can automatically find all videos on your phone, and you can upload and download files over a wireless connection.
            Media Player Classic
            A free app that can play any video or audio file, including DVDs, and stream videos and music from your network. It has a simple interface and features like subtitles, audio tracks, and a media library.
            Video Player Media All Format
            Supports many video formats, including 3GP, AVI, FLV, M4V, MKV, MOV, MP4, and WMV. It can automatically detect videos on your phone and SD card, and you can hide private videos with a PIN code or pattern.  </p>

          <Link to={'/home'} className='btn btn-info' >Get Started</Link>

        </div>
        <div className='col'></div>
        {/* landing image */}

        <div className='col-lg-6'>
          <img src={LandingImg} className='img-fluid ms-5' alt="" />
        </div>

      </div>

      {/* feature */}

      <div>
        <h3 className='text-center'>Features</h3>
        <div className='row container mt-5'>


          <div className='col-lg-4'>

            <Card style={{ width: '20rem', height:'22rem' }}>
              <Card.Img variant="top" src={feature1} className='img-fluid' />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>

              </Card.Body>
            </Card>

          </div>

          <div className='col-lg-4'>

            <Card style={{ width: '20rem' ,height:'22rem' }}>
              <Card.Img variant="top" src={feature2} className='img-fluid' />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>

              </Card.Body>
            </Card>

          </div>

          <div className='col-lg-4'>

            <Card style={{ width: '20rem', height:'22rem' }}>
              <Card.Img variant="top" src={feature3} className='img-fluid' />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>

              </Card.Body>
            </Card>

          </div>

        </div>
      </div>

      {/* last */}

      <div className='my-5 row align-items-center border rounded p-5'>
        <div className="col-lg-5">
          <h3 className='text-warning'>Simple , Fast and Powerful</h3>
          <p style={{textAlign:'justify'}}> <span className='fs-5 fw-bolder'>Play Everything :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quidem accusantium nihil aliquam animi repudiandae, iusto voluptatibus soluta molestiae incidunt necessitatibus qui non sunt officiis quibusdam, provident veritatis cum! Fugit.</p>

          <p style={{textAlign:'justify'}}> <span className='fs-5 fw-bolder'>Catogorise Videos :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quidem accusantium nihil aliquam animi repudiandae, iusto voluptatibus soluta molestiae incidunt necessitatibus qui non sunt officiis quibusdam, provident veritatis cum! Fugit.</p>

          <p style={{textAlign:'justify'}}> <span className='fs-5 fw-bolder'>Catogory :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quidem accusantium nihil aliquam animi repudiandae, iusto voluptatibus soluta molestiae incidunt necessitatibus qui non sunt officiis quibusdam, provident veritatis cum! Fugit.</p>
        </div>
        <div className='col'></div>
        <div className='col-lg-6'>
        <iframe width="100%" height="566" src="https://www.youtube.com/embed/xQMpSz1pgQ8?list=RDxQMpSz1pgQ8" title="Mohajalakam (HD) Song ARYA2  Malayalam"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
        </div>

      </div>
    </div>
  )
}

export default Landing