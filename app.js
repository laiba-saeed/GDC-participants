const express = require('express');
const mongoose = require('mongoose');
const participants = require('./routes/participants');
const app = express();

mongoose.connect('mongodb+srv://admin:ZgKjwy40Yv6GflCj@cluster0.tetedbt.mongodb.net/?retryWrites=true&w=majority',{ 
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.log('Could not connect to MongoDB...', err));

app.use(express.json());
app.use('/api/participants', participants)

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening to the ${port}`));