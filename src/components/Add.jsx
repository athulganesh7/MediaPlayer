import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { saveVideoAPI } from '../../services/allAPI';


// Add is for add vedio button

const Add = ({setAddResponseFromHome}) => {

  const [videoDetails,setVideoDetails]=useState({
    caption:"" , imgUrl:"" , youtubeLink:""
  })
  console.log(videoDetails);
  const [invalidYoutubeLink ,setInvalidYoutubeLink]=useState(false)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractEmbedLinkFromYoutubeLink =(userInputYoutubeLink)=>{
    //steps to create embeded from youtube link
    if (userInputYoutubeLink.includes("https://www.youtube.com/watch?v=")) {
      // we need the 11 letters after the v= in the youtube link , so we use split and we get array with 2 values ,we need 1 index value and we need the first 11 characters so use slice of 0- 11 , slice will give the 11 characters of that array 
      console.log(userInputYoutubeLink.split("v=")[1].slice(0,11));
      const videoId=userInputYoutubeLink.split("v=")[1].slice(0,11)
      setInvalidYoutubeLink(false)
      setVideoDetails({...videoDetails,youtubeLink:`https://www.youtube.com/embed/${videoId}`})
      
    }else{
      setInvalidYoutubeLink(true)
      setVideoDetails({...videoDetails,youtubeLink:""})


    }
  }

  const handleUploadVideo = async ()=>{

    // destructring the object that get from user

    const {caption,imgUrl,youtubeLink} = videoDetails

    if (caption && imgUrl && youtubeLink) {

      try{
        const result = await saveVideoAPI(videoDetails)
        console.log(result);

        if (result.status>=200 && result.status<300) {
          alert("video uploaded successfully")
          handleClose()
          
          // pass the result to the props , to view the card instatly

          setAddResponseFromHome(result)

          
        }else{
          console.log(result);
          
        }
        
      }catch(err){
        console.log(err);
        
      }

      
    }else{
      alert("please fill the form")
    }

  }


  return (
    <>
      <div className='d-flex align-items-center'>
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5'>+</button>
      </div>

      {/* Modal */}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Vedio Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='border rounded p-3'>
            <FloatingLabel controlId="floatingCaption" label="Video Caption">
              {/* use rest operator(...) objectname  for not deleting the other keys while updating values */}
              <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" />
            </FloatingLabel>

            <FloatingLabel className='mt-2' controlId="floatingUrl" label="Image URL">
              <Form.Control  onChange={e=>setVideoDetails({...videoDetails,imgUrl:e.target.value})} type="text" placeholder="Video Image URL" />
            </FloatingLabel>

            <FloatingLabel className='mt-2' controlId="floatingLink" label="Vedio Youtube Link">
              <Form.Control onChange={e=>extractEmbedLinkFromYoutubeLink(e.target.value)} type="text" placeholder="Video Youtube Link" />
            </FloatingLabel>
            {
              invalidYoutubeLink &&
              <div className='text-danger'>
                Invalid Youtube Link
              </div>
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUploadVideo} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add