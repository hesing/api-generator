const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Photo = require('../models/photo');

class PhotosRepository {

    // get all the photos
    getPhotos(callback) {
        Photo.find({}, (err, photos) => {
            if (err) {
                return callback(err);
            }
            callback(null, photos);
        });
    }

    // filter photo
    getPagedPhotos(skip, top, callback) {

        Photo.count((err, photosCount) => {
            var count = photosCount;

            Photo.find({})
                .sort({ name: 1 })
                .skip(skip)
                .limit(top)
                .exec((err, photos) => {
                    if (err) {
                        return callback(err);
                    }
                    callback(null, {
                        count: count,
                        photos: photos
                    });
                });

        });
    }

    // get a  photo
    getPhoto(id, callback) {
        Photo.findById(id, (err, photo) => {
            if (err) {
                return callback(err);
            }
            callback(null, photo);
        });
    }

    // insert a  photo
    insertPhoto(body, callback) {
        var photo = new Photo(body);

        photo.save(function(err, photo) {
            if (err) {
                return callback(err, null);
            }
            console.log(photo);
            callback(null, photo);
        });
    }

    // update photo
    updatePhoto(id, body, callback) {
        Photo.findByIdAndUpdate(id, body, (err, photo) => {
            if (err) {
                return callback(err);
            }

            callback(null, photo);
        });
    }

    // delete a photo
    deletePhoto(id, callback) {
        Photo.remove({ '_id': id }, (err, photo) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, photo);
        });
    }

}

module.exports = new PhotosRepository();
