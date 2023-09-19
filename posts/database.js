var sqlite3 = require("sqlite3").verbose();
const fs = require("fs");

// Open a new database connection
const db = new sqlite3.Database("posts.db");

// Read the schema.sql file
const schema = fs.readFileSync("schema.sql", "utf8");

// Execute the schema.sql file to create the tables
db.exec(schema, function (err) {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Database initialized successfully");
    }
});

module.exports = db;
