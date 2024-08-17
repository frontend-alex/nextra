import mongoose from "mongoose"

export async function db(){
    try{
        await mongoose.connect(process.env.MONGODB_LOCAL_URL as string)
        console.log('Mongodb connected')
    } catch(err){
        console.log(err)
    }
}