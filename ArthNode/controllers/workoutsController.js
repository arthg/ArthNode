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

    };
})(module.exports);