describe("ArthNode service", function () {
    var arthNodeSvc;
    
    beforeEach(function () {
        module('arthNode');
    });
    
    beforeEach(inject(function (arthNodeService) {
        arthNodeSvc = arthNodeService;
    }));
    
    it("should be defined", function () {
        expect(arthNodeSvc).not.toBeNull();
    });

    it("should be a function", function() {
        var fnPrototype = {},
            isFn = arthNodeSvc && fnPrototype.toString.call(arthNodeSvc) === '[object Function]';
        expect(isFn).toBe(true);
    });
});
