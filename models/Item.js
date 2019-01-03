const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema.. a schema is a blueprint of how you want your data structure
// to look like.
//Out schema will require a name for the item, and a timestamp of when
//it was inputted.

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

//now we need to export our schema into an object of Item so that other files
//can use the object.
module.exports = Item = mongoose.model('item', ItemSchema);
