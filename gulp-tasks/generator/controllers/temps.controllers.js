const <%= name %>sRepo = require('../../../lib/<%= name %>sRepository'),
    util = require('util');

class <%= upCaseName %>sController {

    constructor(router) {
        router.get('/', this.get<%= upCaseName %>s.bind(this));
        router.get('/page/:skip/:top', this.get<%= upCaseName %>sPage.bind(this));
        router.get('/:id', this.get<%= upCaseName %>.bind(this));
        router.post('/', this.insert<%= upCaseName %>.bind(this));
        router.put('/:id', this.update<%= upCaseName %>.bind(this));
        router.delete('/:id', this.delete<%= upCaseName %>.bind(this));
    }

    get<%= upCaseName %>s(req, res) {
        <%= name %>sRepo.get<%= upCaseName %>s((err, data) => {
            if (err) {
                res.json(null);
            } else {
                res.json(data);
            }
        });
    }

    get<%= upCaseName %>sPage(req, res) {
        const topVal = req.params.top,
            skipVal = req.params.skip,
            top = (isNaN(topVal)) ? 10 : +topVal,
            skip = (isNaN(skipVal)) ? 0 : +skipVal;

        <%= name %>sRepo.getPaged<%= upCaseName %>s(skip, top, (err, data) => {
            res.setHeader('X-InlineCount', data.count);
            if (err) {
                res.json(null);
            } else {
                res.json(data);
            }
        });
    }

    get<%= upCaseName %>(req, res) {
        const id = req.params.id;

        <%= name %>sRepo.get<%= upCaseName %>(id, (err, <%= name %>) => {
            if (err) {
                res.json(null);
            } else {
                res.json(<%= name %>);
            }
        });
    }

    insert<%= upCaseName %>(req, res) {
        <%= name %>sRepo.insert<%= upCaseName %>(req.body, (err, <%= name %>) => {
            if (err) {
                res.json({ error: 'Insert failed' });
            } else {
                res.json(<%= name %>);
            }
        });
    }

    update<%= upCaseName %>(req, res) {

        if (!req.body) {
            throw new Error('<%= upCaseName %> required');
        }

        <%= name %>sRepo.update<%= upCaseName %>(req.params.id, req.body, (err, <%= name %>) => {
            if (err) {
                res.json({ error: 'Update failed', <%= name %>: null });
            } else {
                res.json(<%= name %>);
            }
        });
    }

    delete<%= upCaseName %>(req, res) {
        <%= name %>sRepo.delete<%= upCaseName %>(req.params.id, (err, <%= name %>) => {
            if (err) {
                res.json(null);
            } else {
                res.json();
            }
        });
    }
}

module.exports = <%= upCaseName %>sController;
