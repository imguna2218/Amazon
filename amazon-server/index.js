const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

const homeItems = require('./Data/Homepage');
const clothItems = require('./Data/ClothItems');
const healthcareItems = require('./Data/HAPCare');
const furnituretems = require('./Data/FurnitureItems');
const electronicItems = require('./Data/ElectronicItems');
const beautyItems = require('./Data/BeautyItems');
const petItems = require('./Data/PetItems');
const toyItems = require('./Data/ToyItems');
const fashionItems = require('./Data/FashionItems');

app.get('/', (req, res) => {
  res.json(homeItems);
});

app.get('/clothes', (req, res) => {
  // res.send('about');
  //res.sendFile(path.join(__dirname, 'index.html'));
  res.json(clothItems);
});


app.get('/hapcare', (req, res) => {
  // res.send('about');
  //res.sendFile(path.join(__dirname, 'index.html'));
  res.json(healthcareItems);
});

app.get('/furniture', (req, res) => {
  // res.send('about');
  //res.sendFile(path.join(__dirname, 'index.html'));
  res.json(furnituretems);
});

app.get('/electronics', (req, res) => {
  // res.send('about');
  //res.sendFile(path.join(__dirname, 'index.html'));
  res.json(electronicItems);
});

app.get('/bpicks', (req, res) => {
  // res.send('about');
  //res.sendFile(path.join(__dirname, 'index.html'));
  res.json(beautyItems);
});

app.get('/petcare', (req, res) => {
  // res.send('about');
  //res.sendFile(path.join(__dirname, 'index.html'));
  res.json(petItems);
});

app.get('/toys', (req, res) => {
  // res.send('about');
  //res.sendFile(path.join(__dirname, 'index.html'));
  res.json(toyItems);
});

app.get('/fashion', (req, res) => {
  res.json(fashionItems);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
