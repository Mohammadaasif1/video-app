// require ('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDb from "./db/index.js";


dotenv.config({path: './env'})





connectDb()
.then(()=>{
    app.listen(process.env.PORT || 4000,()=>{
        console.log(`server is listing on Port:${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("MOngoDB connection is failed !!" , error)
})














// ;( async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error",()=>{
//             console.log("ERROR:" ,error);
//             throw error;
//         })
//         app.listen(process.env.PORT, ()=>{
//             console.log(`app is listing on Port:${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("error:", error);
//         throw error
//     }
// }) ()

