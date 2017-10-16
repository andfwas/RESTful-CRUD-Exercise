var express = require('express');
var router = express.Router();
// Bring in the queries object that has all of the db query functions
var query = require('../db/query')
// Create the route for get all
router.get('/', function(req, res) {
  query.getAll()
  .then(function(cartoon) {
    return res.json(cartoon)
  })
})

// Create the route for get one
router.get('/:id', function(req, res) {
  query.getOne(req.params.id)
  .then(function(cartoon) {
    res.json(cartoon)
  })
})

// Create the route for creating an item
router.post('/', function(req, res) {
  query.create(req.body)
  .then(function(cartoon) {
    res.json(cartoon)
  })
})

// Create the route for updating
router.put('/:id', function(req, res) {
  query.update(req.params.id, req.body)
  .then(function(cartoon) {
    res.send('updated')
  })
})

// Route for deleting an item
router.delete('/:id', function(req, res) {
  query.remove(req.params.id)
  .then(function(cartoon) {
    res.json(cartoon)
  })
})


module.exports = router;
