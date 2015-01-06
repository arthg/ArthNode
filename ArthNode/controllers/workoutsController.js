(function (workoutsController) {
    workoutsController.init = function (app) {

        var data = require("../data");
        
        app.get("/api/workouts", function (req, res) {
            
          
            data.getWorkouts(function (err, workouts) {
                if (err) {
                    res.send(400, err);
                } else {
                    // node engine will format as JSON but we are good citizens with set:
                    res.set("Content-Type", "application/json");
                    res.send(workouts);
                }
            });
        });

        app.post("/api/workouts", function (req, res) {                       
            var workoutToInsert = {
                date: req.body.date,
                activity: req.body.activity,
                venue: req.body.venue,
                duration: req.body.duration,
                distance: req.body.distance,
                notes: req.body.notes
            };
            data.addWorkout(workoutToInsert, function (err) {
                if (err) {
                    res.send(400, "Failed to add workout to data store");
                } else {
                    res.set("Content-Type", "application/json");
                    res.send(201, workoutToInsert);
                }
            });
        });
    };
})(module.exports);