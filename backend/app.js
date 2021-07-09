require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const BooksRoutes = require('./routes/books');

const app = express();
const PORT = process.env.PORT || 3000;
const DBURL = process.env.DB_URL || '';

mongoose.connect(DBURL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DataBase Connected!!'))
    .catch(err => console.error('DB error', err));

mongoose.set('useFindAndModify', false);

app.use(express.json());
app.use(cors());
app.use('/books', BooksRoutes);


app.get('/', (req,res) => {
    res.send('Try other routes!!');
});




app.listen(PORT, () => {
    console.log('Server started ar port '+PORT);
});