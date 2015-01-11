describe("ArthNode controller", function () {
    var arthNodeController;
    
    beforeEach(function () {
        module('arthNode');
    });
    
    beforeEach(inject(function ($controller) {
        arthNodeController = $controller('arthNodeCtrl');
    }));
    
    it("should be defined", function () {
        expect(arthNodeController).not.toBeNull();
    });
    
    it("should contain a reference to the unit of measure service", function () {
        expect(arthNodeController.arthNodeService).not.toBeNull();
    });
});
