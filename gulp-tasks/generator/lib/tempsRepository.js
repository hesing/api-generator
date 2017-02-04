const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    <%= upCaseName %> = require('../models/<%= name %>');

class <%= upCaseName %>sRepository {

    // get all the <%= name %>s
    get<%= upCaseName %>s(callback) {
        <%= upCaseName %>.find({}, (err, <%= name %>s) => {
            if (err) {
                return callback(err);
            }
            callback(null, <%= name %>s);
        });
    }

    // filter <%= name %>
    getPaged<%= upCaseName %>s(skip, top, callback) {

        <%= upCaseName %>.count((err, <%= name %>sCount) => {
            var count = <%= name %>sCount;

            <%= upCaseName %>.find({})
                .sort({ name: 1 })
                .skip(skip)
                .limit(top)
                .exec((err, <%= name %>s) => {
                    if (err) {
                        return callback(err);
                    }
                    callback(null, {
                        count: count,
                        <%= name %>s: <%= name %>s
                    });
                });

        });
    }

    // get a  <%= name %>
    get<%= upCaseName %>(id, callback) {
        <%= upCaseName %>.findById(id, (err, <%= name %>) => {
            if (err) {
                return callback(err);
            }
            callback(null, <%= name %>);
        });
    }

    // insert a  <%= name %>
    insert<%= upCaseName %>(body, callback) {
        var <%= name %> = new <%= upCaseName %>(body);

        <%= name %>.save(function(err, <%= name %>) {
            if (err) {
                return callback(err, null);
            }
            console.log(<%= name %>);
            callback(null, <%= name %>);
        });
    }

    // update <%= name %>
    update<%= upCaseName %>(id, body, callback) {
        <%= upCaseName %>.findByIdAndUpdate(id, body, (err, <%= name %>) => {
            if (err) {
                return callback(err);
            }

            callback(null, <%= name %>);
        });
    }

    // delete a <%= name %>
    delete<%= upCaseName %>(id, callback) {
        <%= upCaseName %>.remove({ '_id': id }, (err, <%= name %>) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, <%= name %>);
        });
    }

}

module.exports = new <%= upCaseName %>sRepository();
