(function (data) {
         
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
    
   

})(module.exports);