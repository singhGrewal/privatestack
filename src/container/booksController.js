const Book = require('../models/Todo');

// Defining all methods and business logic for routes

console.log('req')

module.exports = {

  findAll: function(req, res) {
    console.log('findAll')
    const abc ={
      title : 'test',
      author : 'test'
    }
    Book.find(abc)
      .then(books => console.log(books))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log('findById')
    Book.findById(req.params.id)
      .then(book => res.json(book))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
  	const abc ={
      title : 'test',
      author : 'test'
		}
    console.log('create', res)
    Book.create(abc)
      .then(newBook => res.json(newBook))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log('update')
    Book.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(book => res.json(book))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    console.log('remove')
    Book.findById({ _id: req.params.id })
      .then(book => book.remove())
      .then(allbooks => res.json(allbooks))
      .catch(err => res.status(422).json(err));
  }
};
