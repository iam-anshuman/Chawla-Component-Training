import mongoose,{connect} from "mongoose";

function connection(){
    return connect("mongodb://localhost:27017/express-mongo").then(()=>{
        console.log("Database connected")
    }).catch((err)=>{
        console.log(err)
    })
}

export default connection;