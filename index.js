const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categoties =  require('./data/courseCategories.json');

app.get('/',(req, res) =>{
    res.send('course api running');

});

app.get('/course-categories', (req, res) =>{
    res.send(categoties)
})

app.listen(port, ()=>{
    console.log('course server running on port',port);
})