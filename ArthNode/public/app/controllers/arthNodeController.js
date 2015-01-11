(function (app) {
    
    function controller(arthNodeService) {
        this.arthNodeService = arthNodeService;
    }
    
    app.controller('arthNodeCtrl', ['arthNodeService', controller]);

})(angular.module('arthNode'));