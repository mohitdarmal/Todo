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
    title: String,
    time : String,
    am : String,
    // time : {type : Date, default : Date.now()}
});
var Todo = mongoose.model('Todo', userTodoSchema);
 

//App Routes
app.get('/', (req, res) => {
    res.redirect('/todos');
});

app.get('/todos', (req, res) => {
    Todo.find({}, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.render('index', {
                todos: result
            });
        }
    })
    // res.render('index');
});

app.post('/todos', (req, res) => {
   /*  console.log(req.body.title);
    console.log(req.body.time)
    console.log(req.body.am) */
    console.log(req.body.am); 
    var newTodo = new Todo({
        title: req.body.title,
        time : req.body.time,
        am : req.body.am.toUpperCase(),
    });

    

        // if(newTodo.am == "am" || newTodo.am == "pm"){
        newTodo.save().then((result) => {
            if (!result) {
                return console.log('Err');
            }
            res.redirect('/todos');
        });
    /* }
    else {
        res.redirect('/todos');        
    } */
   
  
});

app.get('/todos/:id/new', (req, res) => {
    var id = req.params.id;
    Todo.findById(id, (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.render('new', {todo : result});
        }
    })
    
});

app.put('/todos/:id', (req, res) => {
    console.log(req.params.id)
    console.log(req.body.title)
    Todo.findByIdAndUpdate(req.params.id, { $set : {
        title : req.body.title,
        time : req.body.time,
        am : req.body.am
    }}, {new : true}, (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.redirect('/todos');
        }
    })
})

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    Todo.findByIdAndDelete(id).then((result) => {
        res.redirect('/todos');
    });
});


app.listen(3000, () => {
    console.log('App Has Started on port 3000');
});