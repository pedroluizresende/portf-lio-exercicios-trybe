const express = require('express');
const validateName = require('./middlewares/validateName')
const validatePrice = require('./middlewares/validatePrice')
const validateDescription = require('./middlewares/validateDescription')
const validateCreatedAt = require('./middlewares/validateCreatedAt')
const validateRating = require('./middlewares/validateRating');
const validateDifficulty = require('./middlewares/validateDifficulty');
const validateSignUp = require('./middlewares/validateSignUp');
const generateToken = require('./utils/generateToken');
const auth = require('./middlewares/auth')

const app = express();

app.use(express.json());

app.post('/activities', auth, validateName, validatePrice, validateDescription, validateCreatedAt, validateRating, validateDifficulty, (_req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

app.post('/signup', validateSignUp, (req, res) => {
  res.status(200).json({message: generateToken()})
})

module.exports = app;