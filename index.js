require('dotenv').config()
const express = require('express');

//or
// import express from 'express';
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/about', (req, res) => {
  res.send('<h1>about us</h1>');
});

app.get('/github', (req, res) => {   
    res.redirect('https://github.com/chiragjindal123');
    });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});