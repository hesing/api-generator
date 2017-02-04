const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Author = require('../models/author');

class AuthorsRepository {

    // get all the authors
    getAuthors(callback) {
        console.log('*** AuthorsRepository.getAuthors');
        Author.find({}, (err, authors) => {
            if (err) {
                console.log(`*** AuthorsRepository.getAuthors error: ${err}`);
                return callback(err);
            }
            callback(null, authors);
        });
    }

    // filter author
    getPagedAuthors(skip, top, callback) {
        console.log('*** AuthorsRepository.getPagedAuthors');
        Author.count((err, authorsCount) => {
            var count = authorsCount;
            console.log(`Skip: ${skip} Top: ${top}`);
            console.log(`Authors count: ${count}`);

            Author.find({})
                .sort({ name: 1 })
                .skip(skip)
                .limit(top)
                .exec((err, authors) => {
                    if (err) {
                        console.log(`*** AuthorsRepository.getPagedAuthors error: ${err}`);
                        return callback(err);
                    }
                    callback(null, {
                        count: count,
                        authors: authors
                    });
                });

        });
    }

    // get a  author
    getAuthor(id, callback) {
        Author.findById(id, (err, author) => {
            if (err) {
                return callback(err);
            }
            callback(null, author);
        });
    }

    // insert a  author
    insertAuthor(body, callback) {
        var author = new Author(body);

        author.save(function(err, author) {
            if (err) {
                return callback(err, null);
            }
            console.log(author);
            callback(null, author);
        });
    }

    // update author
    updateAuthor(id, body, callback) {
        Author.findByIdAndUpdate(id, body, (err, author) => {
            if (err) {
                return callback(err);
            }

            callback(null, author);
        });
    }

    // delete a author
    deleteAuthor(id, callback) {
        Author.remove({ '_id': id }, (err, author) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, author);
        });
    }
}

module.exports = new AuthorsRepository();
