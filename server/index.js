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

//getting all links
app.get("/",async(req,res)=>{
  try{
    const urls = await pool.query("SELECT * FROM urls")
    res.json(urls.rows)
  }catch(err){
    console.error(err)
  }
})

app.post("/",async(req,res)=>{
  try{
    const url = req.body.url
    //redis counter
    const result = await pool.query("INSERT INTO urls VALUES($1,$2)",[id,url])
  }catch(err){
    console.error(err)
  }
})

//short url to long url redirect
app.get("/:id",async(req,res)=>{
  try{
    const id = parseInt(req.params.id)
    const result = await pool.query("SELECT * FROM urls WHERE id=$1", [id])
    if(result.rowCount === 0){
      res.redirect("/")
    }else{
      let url = result.rows[0].link
      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url;
      }
      res.redirect(url)
    }
  }catch(err){
    console.error(err)
  }
})

app.listen(PORT,()=>{
  console.log(`listening on http://localhost:${PORT}`)
})