const express = require('express');
const router = express.Router();

/* GET / */
router.get('/', (req, res, next) => {
  return res.status(200).json({ data: [] });
});

/* POST / */
router.post('/', (req, res, next) => {
  return res.status(200).json({});
});

/* PUT /:id */
router.put('/:id', (req, res, next) => {
  return res.status(200).json({});
});

/* DELETE /:id */
router.delete('/:id', (req, res, next) => {
  return res.status(204).json();
});

module.exports = router;