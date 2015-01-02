(function (controllers) {
    var workoutsController = require("./workoutsController");

    controllers.init = function(app) {
        workoutsController.init(app);
    }

})(module.exports);