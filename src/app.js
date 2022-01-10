const fs = require('fs');
const path = require('path');
const express = require('express');
const { accounts, users, writeJSON } = require('./data.js');
const servicesRoutes = require('./routes/services.js');
const accountRoutes = require('./routes/accounts.js');

const app = new express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));''


app.get('/', (req,res) => {
    res.render('index', { title: 'Account Summary', accounts: accounts})
});

app.get('/profile', (req,res) => {
    res.render('profile', { user: users[0] })
});

app.use('/account', accountRoutes);
app.use('/services', servicesRoutes);



app.listen(3000, () => {
    console.log("You are jamming to port 3000")
});
