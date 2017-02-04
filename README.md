# REST API
REST API with Node JS, Express JS &amp; Mongo DB

## Setup 

```
npm i express mongoose body-parser errorhandler morgan serve-favicon -S
npm i gulp gulp-rename gulp-template yargs nodemon -D
mongod
gulp // http://localhost:3000/api/
```

## API Generator

Generator will create following files...

- controller file in `controllers` folder
- model file in `models` folder
- repository (db communication logic) in `lib` folder

```
gulp component --name photo ( use singular form )

GET http://localhost:3000/api/photos 
POST http://localhost:3000/api/photos
GET http://localhost:3000/api/photos/<id>
GET http://localhost:3000/api/photos/page/<skip>/<limit>
PUT http://localhost:3000/api/photos/<id>
DELETE http://localhost:3000/api/photos/<id>
```

## Run API

- Start your local mongo db server using command `mongod`
- In another terminal run `gulp`
- Now you can browse api `http://localhost:3000/api/<resource>` ( resource is photos,users, books etc)


## Demo

ALL Authors:
```
GET http://localhost:8000/api/authors/
```
Create Author:
```
POST http://localhost:8000/api/authors/
```
Single Author:
```
GET http://localhost:8000/api/authors/560a40b8c1bddfbc46554e89
```

Update Single Author:
```
PUT http://localhost:8000/api/authors/560a40b8c1bddfbc46554e89
```

Delete Single Author:
```
DELETE http://localhost:8000/api/authors/560a40b8c1bddfbc46554e89
```

Search any field ( exact match )
```
GET http://localhost:8000/api/authors/?location=Bangalore
```

Search any field containing text ( + exact match )
```
GET http://localhost:8000/api/authors/?location=hy
```


