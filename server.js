const express = require("express");
const app = express();
const PORT = 4000;
const bakedGoods = require("./models/bakedGoods")

app.set('view engine', 'ejs');

app.get('/bakedGoods', (req, res) => {
    res.send(bakedGoods)
})

app.get('/bakedGoods/:id', (req, res) => {
    res.send(bakedGoods[req.params.id])
})

app.listen(PORT, () =>  console.log(`Listening on ${PORT}`))