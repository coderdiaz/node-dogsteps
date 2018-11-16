const express = require('express');
const router = express.Router();
const firebase = require('firebase');
const User = require('../../../models/user');

/* GET / */
router.get('/', async (req, res, next) => {
  const users = await User.find().exec();
  return res.status(200).json({ data: users });
});

/* GET /:id */
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id).exec();
  return res.status(200).json(user);
});

/* POST / */
router.post('/', (req, res, next) => {
  const {
    name,
    phone,
    email,
    dateBirth,
    password
  } = req.body;
  firebase.auth().createUserWithEmailAndPassword(email, password).then(account => {
    const newUser = new User({
      email,
      name,
      phone,
      dateBirth,
    });
    newUser.save();
    return res.status(201).json(newUser);
  }).catch(err => {
    return res.status(400).json({
      message: 'Error on create account',
      error: err.message,
    });
  });
});

/* PUT /:id */
router.put('/:id', async (req, res, next) => {
  const {id} = req.params;
  const {
    name,
    phone,
    email,
    dateBirth,
  } = req.body;
  const user = await User.findByIdAndUpdate(id, {
    name,
    phone,
    email,
    dateBirth,
  }, {new: true}).exec();
  return res.status(200).json(user);
});

/* DELETE /:id */
router.delete('/:id', async (req, res, next) => {
  const {id} = req.params;
  await User.findByIdAndDelete(id).exec();
  return res.status(204).json();
});

module.exports = router;