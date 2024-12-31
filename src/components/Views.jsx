import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VedioCard from './VedioCard'
import { getAllVideosAPI, saveVideoAPI, updateCategoryAPI } from '../../services/allAPI'


const Views = ({addResponseFromHome,deleteResponseFromCategory,setDeleteResponseFromView}) => {

  const [allVideos,setAllVideos]=useState([])
  const [DeleteVideoCard,setDeleteVideoCard]=useState("")

  useEffect(()=>{
    getAllVideos()
  },[addResponseFromHome,deleteResponseFromCategory,DeleteVideoCard])

  console.log(`all videos : ${allVideos}`);
  

  const getAllVideos = async ()=>{
    try {
      const result = await getAllVideosAPI()
      console.log(result);

      if (result.status>=200 && result.status<300) {
        setAllVideos(result.data)
        
        
      }
      

      
    } catch (error) {
      console.log(error);
      
      
    }
  }

  const dragOverView=(e)=>{
    e.preventDefault()

  }

  const categoryVideoDragOverView= async (e)=>{
    console.log("inside category Videodrag over view ");
    
    const {video,categoryDetails}=JSON.parse(e.dataTransfer.getData("dragData"))
    console.log(video,categoryDetails);

    const updatedCategoryVideoList = categoryDetails?.allVideos?.filter(item=>item.id!=video?.id)

    const updateCategory = {...categoryDetails,allVideos:updatedCategoryVideoList}

    console.log(updateCategory);
    

    // updating the category by delete video from category 

    const result = await updateCategoryAPI(updateCategory)
    // use state lifting to communicate data from videw to category
    setDeleteResponseFromView(result)

    //use api to upload video
    await saveVideoAPI(video)
    // call getALLVideos function
    getAllVideos()
    
    
  }


  return (
    <>
    <Row droppable="true" onDragOver={dragOverView} onDrop={e=>categoryVideoDragOverView(e)} >
      {/* in small screen 12/12 is 1 and in medium screen 12/6 is 2 in large screen 12/4 is 3 , thats how the col is responsive , in bootstrap or react bootstrap max 12 col */}

{/* use ? for check the data is ,otherwise no data it will be error */}
      {
        allVideos?.length>0?
        allVideos.map(video=>(
          <Col sm={12} md={6} lg={4}>
            {/* we passed video data using props */}
      <VedioCard setDeleteVideoCard={setDeleteVideoCard} displayData={video} />
      </Col>
        ))
        :
        <div className='fw-bolder text-danger fs-5'>No videos are Uploaded</div>
      }
      


    </Row>
    </>
  )
}

export default Views