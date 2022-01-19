import express from 'express';


let number=0;
const PORT = process.env.PORT ?? 3000
const app = express()
app.get('/', (req,res)=>{
res.send(`<h1>You came here</h1>${number++} times</h1>`)
})
app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`)
})