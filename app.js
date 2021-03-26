const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const student = require('./routes/student.route');
const app = express();
mongoose.connect("mongodb://localhost/StudentDB", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to the database");
    })
    .catch(err => {
        console.log("Can't connect to the database!", err);
        process.exit;
    });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/students', student);
app.listen(3000, () => { console.log('Server is up and running on port 3000') });
