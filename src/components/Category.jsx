import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { deleteCategoryAPI, getAllCategoryAPI, removeVideoAPI, saveCategoryAPI, updateCategoryAPI } from '../../services/allAPI';

import VedioCard from './VedioCard'

const Category = ({setDeleteResponseFromCategory,deleteResponseFromView}) => {

  const [allCategories, setAllCategories] = useState("")
  const [categoryName, setCategoryName] = useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    console.log("working"+deleteResponseFromView);
    
    getAllCategories()
  },[deleteResponseFromView])

  const handleSaveCategory = async () => {
    if (categoryName) {
      const categoryDetails = { categoryName, allVideos: [] }
      try {

        const result = await saveCategoryAPI(categoryDetails)
        alert("created successfully")
        getAllCategories()
        handleClose()

      } catch (error) {
        console.log(error);

      }


    } else {
      alert("enter the category name")
    }
  }

  const getAllCategories = async () => {
    try {
      const result = await getAllCategoryAPI()
      if (result.status >= 200 && result.status < 300) {
        // by using axios api , the data is in data
        setAllCategories(result.data)
      }

    } catch (error) {
      console.log(error);


    }
  }

  console.log(allCategories);

  const removeCategory = async (id) => {
    try {
      await deleteCategoryAPI(id)
      getAllCategories()

    } catch (error) {
      console.log(error);


    }
  }

  const videoCardDropOverCategory = async (e, categoryDetails) => {
    console.log("inside vediocardDrop" + dragOverCategory?.id);

    // category details that get from the onDrop event passed 
    console.log(categoryDetails);

    // video details that get from data transfet
    const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
    console.log(videoDetails);


    // update category by add video to its allvideo

    categoryDetails.allVideos.push(videoDetails)
    console.log("category" + categoryDetails);


    //api Call to update the category

    await updateCategoryAPI(categoryDetails)
    getAllCategories()
    const result = await removeVideoAPI(videoDetails?.id)

    setDeleteResponseFromCategory(result)
    



  }

  // to prevent the unwanted events passed through drag drop
  const dragOverCategory = (e) => {
    e.preventDefault()

  }

  const categoryVideoDragStarted =(e,dragVideoDetails,categoryDetails) =>{
    console.log("inside the category vedio drag");
    let dragData = {video:dragVideoDetails,categoryDetails}
    e.dataTransfer.setData("dragData",JSON.stringify(dragData))
    

  }

  return (
    <>
      <div className='d-flex justify-content-between align-items-center'>
        <h3>All Categories</h3>
        <button onClick={handleShow} className='btn btn-info ms-3 rounded-circle fw-bolder fs-5'>+</button>

      </div>

      {/* Display al categories */}

      <div className="container-fluid mb-3">
        {
          allCategories?.length > 0 ?
            allCategories.map(categoryDetails => (
              <div droppable="true" onDragOver={dragOverCategory} onDrop={e => videoCardDropOverCategory(e, categoryDetails)} key={categoryDetails?.id} className='border rounded p-3 mb-3'>
                <div className='d-flex justify-content-between'>
                  <h5>{categoryDetails?.categoryName}</h5>
                  <button onClick={() => removeCategory(categoryDetails.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>


                </div>

                {/* display categories */}

                <div className='row mt-2'>
                        {/* vedio cards */}
                  {
                    categoryDetails?.allVideos?.length>0 &&
                    categoryDetails?.allVideos?.map(video=>(
                      
                      <div draggable={true} onDragStart={(e)=>categoryVideoDragStarted(e,video,categoryDetails)} ey={video?.id} className='col-lg-4'>
                   <VedioCard insideCategory={true} displayData ={video}/>

                   
                  </div>

                    ))
                  }


                  
                </div>

              </div>
            ))
            : <div className='fw-bolder text-danger'>no category</div>

        }

      </div>

      {/* modal */}

      <Modal centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <FloatingLabel controlId="floating" label="Category">
            <Form.Control onChange={(e) => setCategoryName(e.target.value)} type="text" placeholder="Category" />
          </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleSaveCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}

export default Category