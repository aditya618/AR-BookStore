const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    bookName: {
        type: String,
        required: 'Book Name is required'
    },
    bookSummary: {
        type: String,
        required: 'Book Summary is required'
    },
    bookAuthor: {
        type: String,
        required: 'Book Author is required'
    },
    bookPrice: {
        type: Number,
        required: 'Book Price is required'
    },
    bookImage: {
        type: String
    },
    bookPublished: {
        type: Number,
        default: new Date().getTime()
    }
});

module.exports = mongoose.model('Book', BookSchema);