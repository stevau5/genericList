const express = require('express');
const router = express.Router();

//Item Model
//we need our item model to setup queries...
const Item = require('../../models/Item');

//ROUTES

// @route GET api/items
// @desc Get All items in DB
router.get('/', (req, res) => {
  Item.find() //returns a promise so we need .then
  .sort({ date: -1})
  .then(items => res.json(items))
});

// @route POST api/items
// @desc Create an item in the database.
//we want to construct an object to insert in the database.
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

// @route Delete api/items/:id
// @desc Delete an item in the database.
//:id is a parameter, it's a placehold for the id of the item we wanna delete
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
  .then(item => item.remove().then(() => res.json({success: true})))
  .catch(err => res.status(404).json({success: false}));
});



module.exports = router;
