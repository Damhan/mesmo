const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')

const users = require('./routes/api/users');



const app = express();

//bodyparser middleware
app.use(bodyParser.json());

//db setup
const db = process.env.mongoUri

//coneec to mongo 
mongoose.connect(db,{useNewUrlParser:true}).then(
    () => console.log('MongoDB Connected')
    ).catch(err=> console.log(err));

app.use('/api/users', users)

//serve static assets if in production
if(process.env.NODE_ENV === 'production') {
    //setstaticfolder
    app.use(express.static('client/build'))

    app.get('*',(req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
});