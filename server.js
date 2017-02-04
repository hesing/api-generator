const express       = require('express'),
    bodyParser      = require('body-parser'),
    errorhandler    = require('errorhandler'),
    morgan          = require('morgan'),
    favicon         = require('serve-favicon'),
    router          = require('./routes/router'),
    database        = require('./lib/database'),
    app             = express(),
    port            = 3000;

class Server {

    constructor() {
        this.initExpressMiddleWare();
        this.initCustomMiddleware();
        this.initDbSeeder();
        this.initRoutes();
        this.start();
    }

    initDbSeeder() {
        database.open(()=> {
            // db coonected
            // seed db
        });
    }

    start() {
        app.listen(port, (err) => {
            console.log('[%s] Listening on http://localhost:%d', process.env.NODE_ENV, port);
        });
    }

    initExpressMiddleWare() {
        app.use(favicon(__dirname + '/public/images/favicon.ico'));
        app.use(express.static(__dirname + '/public'));
        app.use(morgan('dev'));
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(errorhandler());

        process.on('uncaughtException', function (err) {
            if (err) console.log(err, err.stack);
        });
    }

    initCustomMiddleware() {
        if (process.platform === "win32") {
            require("readline").createInterface({
                input: process.stdin,
                output: process.stdout
            }).on("SIGINT", function () {
                console.log('SIGINT: Closing MongoDB connection');
                database.close();
            });
        }

        process.on('SIGINT', function() {
            console.log('SIGINT: Closing MongoDB connection');
            database.close();
        });
    }

    initRoutes() {
        router.load(app, './controllers');

        // redirect all others to the index (HTML5 history)
        app.all('/*', function(req, res) {
            res.sendFile(__dirname + '/public/index.html');
        });
    }

}

var server = new Server();