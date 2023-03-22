const express = require("express");
const app = express();
const PORT = 4000;
const bakedGoods = require("./models/bakedGoods")

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended:false }));


app.get('/bakedGoods', (req, res) => {
    res.render('index', { bakedGoods });
});


app.get('/bakedGoods/new', (req, res) => {
    res.render('new');
});

app.get('/bakedGoods/:name', (req, res) => {
    const name = req.params.name;
    const bakedGood = bakedGoods.find(bg => bg.name === name);
    res.render('show', { bakedGood });
});



app.post('/bakedGoods', (req, res) => {
    const { name, price, image } = req.body;
    bakedGoods.push({ name, price, image });
    res.redirect('/bakedGoods');
});

app.listen(PORT, () =>  console.log(`Listening on ${PORT}`));