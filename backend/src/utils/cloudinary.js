import {v2 as cloudinary} from 'cloudinary'
import {ApiError} from './ApiError.js'
import fs from 'fs'
import dotenv from "dotenv";

cloudinary.config({
    cloud_name : "ddg5zbrmm",
    api_key : '633491673599745',
    api_secret : 'H52eE33N5eQBM_NWJrQztazFLZo'
})


const uploadOnCloudinary = async (localFilePaths) => {
    try {
      if (!Array.isArray(localFilePaths) || localFilePaths.length === 0) {
        throw new ApiError(400, "No files provided");
      }
  
      // Array to hold Cloudinary upload responses
      const uploadResponses = [];
  
      // Upload each file one by one
      for (const localFilePath of localFilePaths) {
        const response = await cloudinary.uploader.upload(localFilePath, {
          resource_type: 'auto',
        });
  
        if (!response) {
          throw new ApiError(500, "Couldn't upload on Cloudinary");
        }
  
        // Add response to the array of uploaded files
        uploadResponses.push(response);
  
        // Optionally delete the local file after uploading
        // fs.unlinkSync(localFilePath);
      }
  
      // Return all responses (or just URLs if preferred)
      return uploadResponses.map((response) => response.secure_url);
  
    } catch (error) {
      // Handle errors and clean up files
      // localFilePaths.forEach((filePath) => fs.unlinkSync(filePath));
  
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(500, `Error on uploading to Cloudinary: ${error.message}`);
    }
  };
  


const deleteFromCloudinary = async (url)=>{
    try {

        if (!url){
            throw new ApiError(400, "No url provided")
        }

        const publicId = url.split('/')[7]?.split('.')[0]
        if (!publicId){
            throw new ApiError(400, "Wrong url sent")
        }

        const response = await cloudinary.uploader.destroy(publicId)
        if (response.result === 'not found'){
            throw new ApiError(404,"resource not found or already deleted")
        }
        return
        
    } catch (error) {

        if (error instanceof ApiError){
            throw error
        }
        throw new ApiError(500,`error on deleting from cloudinary - ${error}`)
    }
}

export{
    uploadOnCloudinary,
    deleteFromCloudinary
}