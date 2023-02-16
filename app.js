require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const Quote = require('./models/quote.js')


const quotesDB = [
    {
        quote: "The unexamined life is not worth living",
        author: 'Socrates'
    }, 
    {
        quote: "He who thinks great thoughts, often makes great errors",
        author: 'Martin Heidegger'
    },
    {
        quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit",
        author: 'Aristotle'
    },
    {
        quote: "Life must be understood backward. But it must be lived forward",
        author: 'Soren Kierkegaard'
    },
    {
        quote: "You can discover more about a person in an hour of play than in a year of conversation",
        author: 'Plato'
    },
    {
        quote: "Things alter for the worse spontaneously, if they be not altered for the better designedly",
        author: 'Francis Bacon'
    },
    {
        quote: "All that is necessary for the triumph of evil is that good men do nothing",
        author: 'Anonymous'
    },
    {
        quote: "Morality is not the doctrine of how we may make ourselves happy, but of how we may make ourselves worthy of happiness",
        author: 'Immanuel Kant'
    },
    {
        quote: "It is one thing to show a man that he is in error, and another to put him in possession of truth",
        author: 'John Locke'
    },
    {
        quote: "The only thing I know is that I know nothing",
        author: 'Socrates'
    },
    {
        quote: "The function of prayer is not to influence God, but rather to change the nature of the one who prays",
        author: 'Soren Kierkegaard'
    },
    {
        quote: 'I can control my passions and emotions if I can understand their nature',
        author: 'Spinoza'
    },
    {
        quote: 'The brave man is he who overcomes not only his enemies but his pleasures',
        author: 'Democritus'
    },
    {
        quote: 'Good and evil, reward and punishment, are the only motives to a rational creature',
        author: 'John Locke'
    },
    {
        quote: "To do as one would be done by, and to love one's neighbor as oneself, constitute the ideal perfection of utilitarian morality",
        author: "John Stuart Mill"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author: "Benjamin Franklin"
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle"
    },
    {
        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author: "Robert Louis Stevenson"
    },
    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "Mother Theresa"
    }
]


//MVC Setup
//Views
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// models
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


// Middleware
app.use(express.urlencoded({extended: true}))

app.use((req, res, next) => {
    next()
})


// INDEX
app.get('/', async (req, res) => {
    const quotesDB = await Quote.find({})
    let myQuote = quotesDB[Math.floor(Math.random() * quotesDB.length)]
    res.render('Index', {myQuote: myQuote})
    // Quote.find({}, (err, foundQuote) => {
    //     if(err) {
    //         res.status(400).send(err)
    //     } else {
    //         res.render('Index', {
    //             quotes: foundQuote
    //         })
    //     }
    // })
})


//QUOTE
app.get('/myQuote', async (req, res)=> {
    res.redirect('/')

})

//NEW
app.get('/quote/new', (req, res) => {
    res.render('New')
})

//CREATE
app.post('/quote', (req, res) => {
    Quote.create(req.body, (err, createdQuote) => {
        if(err){
            res.status(403).send(err)
        } else{
            console.log('quote created')
            res.redirect('/')
        }
    })
})

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})