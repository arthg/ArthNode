﻿(function (database) {
    var mongodb = require("mongodb");
    var mongoUrl = "mongodb://localhost:27017/arthNode";
    var theDb = null;
    
    database.getDb = function (next) {
        if (!theDb) {
            mongodb.MongoClient.connect(mongoUrl, function (err, db) {
                if (err) {
                    next(err, null);
                } else {
                    theDb = {
                        db: db,
                        workouts: db.collection("workouts"),
                        activities: db.collection("activities")
                    };
                    next(null, theDb);
                }
            });
        } else {
            next(null, theDb);
        }

    }
})(module.exports);