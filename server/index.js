import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import pool from "./db.js"

dotenv.config()
const PORT = 3000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",async(req,res)=>{
  try{
    const urls = await pool.query("SELECT * FROM urls")
    res.json(urls)
  }catch(err){
    console.error(err)
  }
})



app.listen(PORT,()=>{
  console.log(`listening on http://localhost:${PORT}`)
})