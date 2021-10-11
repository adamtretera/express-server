const app = require('express')();


app.get("/",( reg, res) => res.json({message:"Docker je eazy :)"}))


const port = process.env.PORT || 8080

app.listen(port, () => console.log(`app listeing on localhost${port}`))