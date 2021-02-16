import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCards.js';
import Cors from 'cors'
//App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://admin:C9NsJwH4jbptK4A@cluster0.jbuzy.mongodb.net/tinderdb?retryWrites=true&w=majority'

//Middlewares
app.use(express.json());
app.use(Cors());

//DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})



//API Endpoitns
app.get('/', (req, res) => res.status(200).send("Hello clever programmers"));

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    });
});

app.delete('/tinder/cards', (request, response) => {
    // let contactId = request.params.id
   console.log(request.body);
   res.send("ilir");
})

//Listener

app.listen(port, () => console.log(`listening on localhost: ${port}`));