require('./config/config');
const express = require('express');
const  bodyParser = require('body-parser');
const app = express();

// parse  midleware
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())

app.get('/usuario', function (req, res) {
  res.json('get usuarios')
})


app.post('/usuario', function (req, res) {
    let body = req.body;
    if (body.nombre === undefined)
    {

    }else {

    }
    res.json({
       Persona:body
    })
  })

app.put('/usuario/:id', function (req, res) {
     let id = req.params.id; 
    res.json({
        id
    })
  }) 

app.delete('/usuario', function (req, res) {
    res.json('delete usuarios')
  })
app.listen(process.env.PORT, ()=>{
    console.log("escuchando puerto 3000")
}) 