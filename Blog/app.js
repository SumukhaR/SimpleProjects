const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const { render } = require('ejs')
const router = require('./routes/blogRoutes')

//express app
const app = express()

//connect to mongodb
const dbURI = 'mongodb+srv://sumukhar132:Skywalker13@cluster0.3eydi84.mongodb.net/nodeCourse?retryWrites=true&w=majority'
mongoose.connect(dbURI)
.then((result) => app.listen(3000))
.catch((err) => console.log(err))

//view engine
app.set('view engine', 'ejs')

//middleware & static
app.use(express.static('public'))
app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))

//mongoose and mongo sandbox routes
/* app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog2',
        snippet: 'about new blog',
        body: 'more about my blog'
    })
    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
}) 

app.get('/all-blog', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get('/single-blog', (req, res) => {
    Blog.findById('6549fb9e98994ce384eac9b0')
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})  */
//routes
app.get('/', (req, res) => {
    //res.send('<p>home page</p>')
   /*  res.render('./views/index', (err, html) => {
        if(err) console.log(err)
        console.log(html)
    }) */
   /*  const blogs = [
        {title: 'Browser', snippet: 'at eval ("C:\\Users\\sushm\\NODEJS\\NodeBasics\\views\\404.ejs":12:25)'},
        {title: 'Defeat', snippet: 'at eval ("C:\\Users\\sushm\\NODEJS\\NodeBasics\\views\\404.ejs":12:25)'},
        {title: 'Mario finds stars', snippet: 'at eval ("C:\\Users\\sushm\\NODEJS\\NodeBasics\\views\\404.ejs":12:25)'}
    ] 
    res.render('index', {title: 'Home', blogs: blogs}) */
    res.redirect('/blogs')
})



app.get('/about', (req, res) => {

    //res.send('<p>home page</p>')
    res.render('about', {title: 'About'})
})


/* app.get('/about-us', (req, res) => {
    res.redirect('/about')
})  */

app.use("/blogs",router)

// 404 page
app.use((req, res) => {
    res.status(404).render('404',{title: '404'})
})

