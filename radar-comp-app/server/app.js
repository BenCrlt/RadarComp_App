const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "radar_comp_app_db"
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connecté à la base de données");
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.get('/api/list_skills', (req, res, next) => {
    db.query("SELECT * FROM skill;", function (err, result) {
        if (err) throw err;
        res.status(200).json(result);
    });
})

app.get('/api/list_items/:id_skill', (req, res, next) => {
    const query_sql = "SELECT * FROM item WHERE item_skill_id = " + req.params.id_skill + ";";
    db.query(query_sql, function (err, result) {
        if (err) throw err;
        res.status(200).json(result);
    });
})

module.exports = app;