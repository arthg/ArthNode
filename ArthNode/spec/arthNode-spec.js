describe("Formula for BMI", function () {
    
    describe("Given a 5 ft 10 person who weighs 300 pounds", function () {
        
        it("should compute a BMI of 43", function () {
            var actual = formulaBmi({
                height: 70,
                weight: 300
            });
            expect(actual).toBeCloseTo(43);
        });

    });
    
});