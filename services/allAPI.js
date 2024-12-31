import serverURL from "./serverURL"
import commonAPI from "./commonAPI"

// saveVideoAPI = post http request , add component
export const saveVideoAPI=async(videoDetails)=>{
    return await commonAPI(`POST`,`${serverURL}/uploadVideos`,videoDetails)
}


// getallvideoapi - get method , called view component , when component displays in browser inside its useEffect Hook 

export const getAllVideosAPI=async()=>{
    return await commonAPI(`GET`,`${serverURL}/uploadVideos`,"")
}

// saveHistoryAPI - post http method to http://localhost:3000/history called by videoCard component , when we clicked on video

export const saveHistoryAPI = async(historyDetails)=>{
    return await commonAPI(`POST` ,`${serverURL}/history`,historyDetails)
}

// getHistoryAPI - get http request  to  http://localhost:3000/history  called by history component when its open in browser

export const getHistoryAPI=async()=>{
    return await commonAPI(`GET`,`${serverURL}/history`,"")
}


// deleteHistoryAPI - delete method to http://localhost:3000/history/id called by history when clicked on delete button 

// when we use delete method , dont make last body empty string , make it empty object {}

export const deleteHistoryAPI = async (id)=>{
    return await commonAPI(`DELETE`,`${serverURL}/history/${id}`,{})
}

// removeVideoAPI - delete method to http://localhost:3000/uploadVideos/id called by videoCard when clicked on delete button 

export const removeVideoAPI = async (id)=>{
    return await commonAPI(`DELETE`,`${serverURL}/uploadVideos/${id}`,{})
}


// saveCategoryAPI - post request http://localhost:3000/categories called by category component when user click on add btn 

// categoryDetails = {categornyName,allVideos}

export const saveCategoryAPI = async(categoryDetails)=>{
    return await commonAPI(`POST` ,`${serverURL}/categories`,categoryDetails)
}


// getAllCategoryAPI - get method http request  to  http://localhost:3000/categories called by category component when its open in browser

export const getAllCategoryAPI=async()=>{
    return await commonAPI(`GET`,`${serverURL}/categories`,{})
}


// deleteCategoryAPI - delete method ,http://localhost:3000/categories/id called by 
//category component delete button enter

export const deleteCategoryAPI = async (id)=>{
    return await commonAPI(`DELETE`,`${serverURL}/categories/${id}`,{})
}


// updateCategoryAPI - put method ,http://localhost:3000/categories/id called by 
//category component when video drop over the category

export const updateCategoryAPI = async (categoryDetails)=>{
    return await commonAPI(`PUT`,`${serverURL}/categories/${categoryDetails.id}`,categoryDetails)
}


