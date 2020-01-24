const express = require('express')
const https = require('https')
const Sequelize = require('sequelize')
require('dotenv').config();

const app = express()

const key = process.env.GOOGLE_API_KEY
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host:'localhost',
    port:3306,
    dialect: 'mysql'
})
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.get('/api', (req, res)=> {
    https.get(`https://www.googleapis.com/books/v1/volumes?q=calculus&key=${key}`, (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);
        console.log('poggers')      
    })
})

app.listen(3001, ()=> {console.log('listening on port 3001')})