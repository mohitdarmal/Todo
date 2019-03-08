const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//App Config
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride('_method'));
// parse application/json
app.use(bodyParser.json())


//Mongoose Config
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/User-Todo', {
    useNewUrlParser: true
});
var userTodoSchema = new mongoose.Schema({
    title : String,
});
var Todo = mongoose.model('Todo', userTodoSchema);


//App Routes
app.get('/', (req, res) => {
    res.redirect('/todos');
});

app.get('/todos', (req, res) => {
    Todo.find({}, (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.render('index', {todos : result});
        }
    })
    // res.render('index');
});

app.post('/todos', (req, res) => {
    console.log(typeof(req.body.title));
    var newTodo = new Todo({
        title :  req.body.title,
    });
    if(!newTodo.title == ""){
        newTodo.save().then((result) => {
            if(!result){
                return console.log('Err');
            }
            res.redirect('/todos');
        });
    }else{
        res.redirect('/todos');
    }
});

// app.delete('/todos')


app.listen(3000, () => {
    console.log('App Has Started on port 3000');
});