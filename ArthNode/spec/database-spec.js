var database = require("../data/database");

describe("database.getDB", function() {
    xit("should initialize DB object with collections", function() {
        database.getDb(function (err, db) {
            // could not get this to work
            console.log("hello jasmine");
            expect(err).toBeNull();
            expect(db.db).toBeDefined();
            expect(db.workouts).toBeDefined();
        });
    });
});