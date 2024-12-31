import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../../services/allAPI'


const History = () => {

  // api call of history

  const [allVideoHistory,setAllVideoHistory]=useState([])

  useEffect(()=>{
    getAllHistory()
  },[])

  const getAllHistory = async ()=>{

    try {
      const result = await getHistoryAPI()
      if (result.status>=200 && result.status<300) {

        setAllVideoHistory(result.data)
        
      }else{
        console.log(result);
        
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }

  // remove history

  const removeHistory = async (id)=>{

    try {

      await deleteHistoryAPI(id)

      // call this fn for re render the history after the deletion
      getAllHistory() 
      
    } catch (error) {
      console.log(error);
      
      
    }

  }


  return (
    <div style={{paddingTop:'100px'}}>
      <div className='d-flex justify-content-between container'>
        <h3>Watch History</h3>
        <Link to={'/home'}>Back to Home</Link>


      </div>
      <table className='container table'>

        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>TimeStamp</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {
            allVideoHistory?.length>0?
            allVideoHistory?.map((vedioDetails,index)=>(
              <tr key={vedioDetails?.id}>
            <td>{index+1}</td>
            <td>{vedioDetails?.caption}</td>
            <td>{vedioDetails?.youtubeLink}</td>
            <td>{vedioDetails?.timeStamp}</td>
            <td><button onClick={()=>removeHistory(vedioDetails.id)} className='btn btn-danger'><i class="fa-solid fa-trash"></i></button></td>
          </tr>

            )):
            <div className='fw-bolder text-danger' >you don't have history</div>

          }
        </tbody>

      </table>


    </div>
  )
}

export default History