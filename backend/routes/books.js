const express = require('express');
const router = express.Router();
const Book = require('../models/Books');


router.get('/', (req,res) => {
    // res.send('route working!!');
    Book.find()
        .then((books) => res.status(200).json({books}))
        .catch(err => {
            console.log(err);
            res.status(400).json({msg: 'Error occured while fetching books'});
        });
});

router.post('/', (req,res) => {
    if(req && req.body){
        const newBook = new Book({
            bookName: req.body.bookName,
            bookAuthor: req.body.bookAuthor,
            bookSummary: req.body.bookSummary,
            bookImage: req.body.bookImage,
            bookPrice: req.body.bookPrice,
        });
        newBook.save()
            .then(() => res.status(201).json({posted: true, msg: 'Posted Successfully!!'}))
            .catch(err => {
                console.log(err);
                res.status(400).json({posted: false, msg: 'Error Occurred while posting!'});
            });
    }
});

router.get('/:id', (req,res) => {
    const id = req.params.id;
    if(id) {
        Book.findOne({_id: id})
            .then((foundBook) => res.status(200).json(foundBook))
            .catch(err => {
                console.log(err);
                res.status(400).json({msg: 'Book Not Found'});
            })
    }
});

router.put('/:id', (req,res) => {
    const id = req.params.id;
    if(id) {
        const updatedBook = {
            bookName: req.body.bookName,
            bookAuthor: req.body.bookAuthor,
            bookSummary: req.body.bookSummary,
            bookImage: req.body.bookImage,
            bookPrice: req.body.bookPrice,
        };
        Book.findOneAndUpdate({_id: id}, updatedBook)
            .then((book) => res.status(200).json({updated: true, msg: 'Update Successful'}))
            .catch(err => {
                console.log(err);
                res.status(400).json({updated: false, msg: 'Error occurred updating book'});
            })
    }
});

router.delete('/:id', (req,res) => {
    const id = req.params.id;
    if(id) {
        Book.findOneAndDelete({_id: id})
            .then((book) => res.status(200).json({deleted: true, msg: 'Delete Successful'}))
            .catch(err => {
                console.log(err);
                res.status(400).json({deleted: false, msg: 'Error occurred while deleting book'});
            })
    }
});

module.exports = router;
