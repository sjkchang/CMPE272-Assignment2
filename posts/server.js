const express = require("express");
const db = require("./database.js");

const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/posts", (req, res) => {
    let sql = `SELECT * FROM posts`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            data: rows,
        });
    });
});

// simple route
app.get("/post/:postId", (req, res) => {
    let sql = `SELECT * FROM posts WHERE id = ?`;
    db.get(sql, [req.params.postId], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            data: row,
        });
    });
});

app.post("/post", (req, res) => {
    let sql = `INSERT INTO posts (title, content) VALUES (?,?)`;
    db.run(sql, [req.body.title, req.body.content], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            data: row,
        });
    });
});

app.put("/post/:postId", (req, res) => {
    let sql = `UPDATE posts SET title = ?, content = ? WHERE id = ?`;
    db.run(
        sql,
        [req.body.title, req.body.content, req.params.postId],
        (err, row) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({
                data: row,
            });
        }
    );
});

// simple route
app.delete("/post/:postId", (req, res) => {
    let sql = `DELETE FROM posts WHERE id = ?`;
    db.get(sql, [req.params.postId], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            data: row,
        });
    });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
