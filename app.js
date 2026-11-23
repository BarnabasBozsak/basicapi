import express from "express"

const PORT = 3000
const app = express()
app.use(express.json())

app.get("/",(req,res) => {
    res.send("<h1>Üdvözöllek az oldalamon</h1>")
    //res.json({message: "<h1>Üdvözöllek az oldalamon</h1>"})
})

app.listen(PORT, () =>{
    console.log(`Fut a szerver a porton: ${PORT}`)
})
