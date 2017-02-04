const authorsRepo = require('../../../lib/authorsRepository'),
    util = require('util');

class AuthorsController {

    constructor(router) {
        router.get('/', this.getAuthors.bind(this));
        router.get('/page/:skip/:top', this.getAuthorsPage.bind(this));
        router.get('/:id', this.getAuthor.bind(this));
        router.post('/', this.insertAuthor.bind(this));
        router.put('/:id', this.updateAuthor.bind(this));
        router.delete('/:id', this.deleteAuthor.bind(this));
    }

    getAuthors(req, res) {
        console.log('*** getAuthors');
        authorsRepo.getAuthors((err, data) => {
            if (err) {
                console.log('*** getAuthors error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getAuthors ok');
                res.json(data);
            }
        });
    }

    getAuthorsPage(req, res) {
        console.log('*** getAuthorsPage');
        const topVal = req.params.top,
            skipVal = req.params.skip,
            top = (isNaN(topVal)) ? 10 : +topVal,
            skip = (isNaN(skipVal)) ? 0 : +skipVal;

        authorsRepo.getPagedAuthors(skip, top, (err, data) => {
            res.setHeader('X-InlineCount', data.count);
            if (err) {
                console.log('*** getAuthorsPage error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getAuthorsPage ok');
                res.json(data);
            }
        });
    }

    getAuthor(req, res) {
        console.log('*** getAuthor');
        const id = req.params.id;
        console.log(id);

        authorsRepo.getAuthor(id, (err, author) => {
            if (err) {
                console.log('*** getAuthor error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getAuthor ok');
                res.json(author);
            }
        });
    }

    insertAuthor(req, res) {
        console.log("req", req.body);
        authorsRepo.insertAuthor(req.body, (err, author) => {
            if (err) {
                console.log('*** AuthorsRepo.insertAuthor error: ' + util.inspect(err));
                res.json({ error: 'Insert failed' });
            } else {
                console.log('*** insertAuthor ok');
                res.json(author);
            }
        });
    }

    updateAuthor(req, res) {

        if (!req.body) {
            throw new Error('Author required');
        }

        authorsRepo.updateAuthor(req.params.id, req.body, (err, author) => {
            if (err) {
                res.json({ error: 'Update failed', author: null });
            } else {
                res.json(author);
            }
        });
    }

    deleteAuthor(req, res) {
        authorsRepo.deleteAuthor(req.params.id, (err, author) => {
            if (err) {
                res.json(null);
            } else {
                res.json();
            }
        });
    }
}

module.exports = AuthorsController;
