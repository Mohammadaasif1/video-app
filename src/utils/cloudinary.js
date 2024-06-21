// how to upload file with the help of multer

import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:CLOUD_API_SECRET
})

const uploadFileOnCloudinary = async (localFilePath)=>{
    try {
        if(!localFilePath) return null
        const fileResponse = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
            
        })

        console.log("file uploaded successfully !!", fileResponse.url)
        return fileResponse.url;
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
    }
}

export {uploadFileOnCloudinary}