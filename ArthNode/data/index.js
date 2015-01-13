(function (data) {
    
    var seedActivities = require("./seedActivities");
    var database = require("./database");
    
    data.getWorkouts = function (next) {
        database.getDb(function (err, db) {
            if (err) {
                next(Error, null);
            } else {
                db.workouts.find().toArray(function (err, results) {
                    if (err) {
                        next(Error, null);
                    } else {
                        next(null, results);
                    }
                });
            }
        });
    };
    
    function seedActivites() {
        database.getDb(function (err, db) {
            if (err) {
                console.log("Failed to seed database: " + err);
            } else {
                // test to see if data exists
                db.activities.count(function (err, count) {
                    if (err) {
                        console.log("Failed to retrieve database count");
                    } else {
                        if (count == 0) {
                            console.log("Seeding the Database with activities...");
                            seedActivities.initialActivities.forEach(function (item) {
                                db.activities.insert(item, function (err) {
                                    if (err) console.log("Failed to insert activity into database");
                                });
                            });
                        } else {
                            console.log("Database activities already seeded");
                        }
                    }

                });
            }
        });
    }
    
    seedActivites();   

})(module.exports);