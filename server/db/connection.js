const mongoose = require('mongoose');
require('dotenv').config();

// const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.zw6hky5.mongodb.net/?retryWrites=true&w=majority`;

const url=`mongodb+srv://admin:${process.env.DB_PASSWORD}@backenddb.37xlggb.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB`

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))