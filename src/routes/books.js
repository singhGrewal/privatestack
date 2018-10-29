const router = require('express').Router();
const booksController = require('../container/booksController');

console.log("books")

router
	.route('/')
	.get(booksController.findAll)
	.post(booksController.create);

router
	.route('/:id')
	.get(booksController.findById)
	.put(booksController.update)
	.delete(booksController.remove);

module.exports = router;
