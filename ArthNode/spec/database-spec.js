var database = require("../data/database");

describe("database.getDB", function() {
    it("should initialize DB object with collections", function(done) {
        database.getDb(function (err, db) {
            expect(err).toBeNull();
            expect(db.db).toBeDefined();
            expect(db.workouts).toBeDefined();
            done();
        });
    });
});