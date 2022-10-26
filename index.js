const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categoties =  require('./data/courseCategories.json');
const categoryDetails = require('./data/course-info.json');

app.get('/',(req, res) =>{
    res.send('course api running');

});

app.get('/course-categories', (req, res) =>{
    res.send(categoties)
});

app.get('/category/:id',(req,res)=>{
    const id = req.params.id;
    const category_course = categoryDetails.filter(n =>n.category_id === id);
    res.send(category_course);
})

app.get('/course-info/:id',(req, res) =>{
    const id = req.params.id;
    const selectedCourse = categoryDetails.find(c => c._id === id);
    res.send(selectedCourse);  
})

app.listen(port, ()=>{
    console.log('course server running on port',port);
})