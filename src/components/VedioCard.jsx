import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { removeVideoAPI, saveHistoryAPI } from '../../services/allAPI';


// {displayData} is destured here, it is passed from views , we cant use props , by this , we can acess the values using keys
const VedioCard = ({displayData,setDeleteVideoCard,insideCategory}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () =>{
  // display modal
   setShow(true);

   // store history in json
   const {caption,youtubeLink}=displayData
   const sysDateTime = new Date()
   console.log(sysDateTime);

   console.log(sysDateTime.toLocaleString('en-US',{timeZoneName:'short'}));
   const timeStamp =sysDateTime.toLocaleString('en-US',{timeZoneName:'short'})
   // create new object to pass the history data , if same value is assigning , no need to use : inside the object 

   const historyDetails = {caption,youtubeLink,timeStamp}
   
   try {
     await saveHistoryAPI(historyDetails)
    
   } catch (error) {
    console.log(error);
    
    
   }
   
  }

  const deleteVideo = async (id)=>{
    try {
      const result = await removeVideoAPI(id)
    setDeleteVideoCard(result)
      
    } catch (error) {
      console.log(error);
      
      
    }

  }

  const videoCardDragStarted =(e,dragVideoDetails)=>{
    console.log("inside videoCardDragStarted :"+e,displayData);

    //share data using event drag start
    e.dataTransfer.setData("videoDetails",JSON.stringify(dragVideoDetails))
    

  }


  return (
    <>
      <Card draggable={true} onDragStart={e=>videoCardDragStarted(e,displayData)} style={{ width: '14rem', cursor: 'pointer',marginBottom:'7px' }}>
        <Card.Img onClick={handleShow} height={'250px'} variant="top" src={displayData?.imgUrl} />
        <Card.Body>
          <Card.Text className='d-flex justify-content-between'>
            <p>{displayData?.caption}</p>

            
            {/* the delete button only shows in the outside card , not inside the category */}
            {
              !insideCategory && 
              <button onClick={()=>deleteVideo(displayData?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>

            }


          </Card.Text>
        </Card.Body>
      </Card>

      {/* modal */}

      <Modal size='lg' centered show={show} onHide={handleClose} backdrop="static" keyboard={false} >

        <Modal.Header closeButton>
          <Modal.Title>Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* ?autoplay=1 for autoplay youtube embeded , give in src */}
          <iframe width="100%" height="566" src={`${displayData?.youtubeLink}?autoplay=1`} title="Caption" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default VedioCard