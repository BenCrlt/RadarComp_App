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

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//USER

app.get('/api/user/load/:user_email&:user_passwd', (req, res, next) => {
    const query_sql = "SELECT * FROM user WHERE user_email = ? AND user_password = ?";
    db.query(query_sql, [req.params.user_email, req.params.user_passwd], (err, resultat) => {
        if (err) throw err;
        res.status(200).json(resultat);
    })
})

app.get('/api/user/check/:user_email', (req, res, next) => {
    const query_sql = "SELECT * FROM user WHERE user_email = ?";
    db.query(query_sql, [req.params.user_email], (err, resultat) => {
        if (err) throw err;
        res.status(200).json(resultat);
    })
})


app.post('/api/user/create', (req, res, next) => {
    console.log(req.body);
    const query_sql = "INSERT INTO user (user_first_name, user_last_name, user_email, user_password) VALUES (?,?,?,?)";
    db.query(query_sql, [req.body.first_name, req.body.last_name, req.body.email, req.body.password], (err, resultat) => {
        if (err) throw err;
        res.status(201).json({ message: 'Objet enregistré !'});
    })
});

//EVALUATION

app.get('/api/list_skills', (req, res, next) => {
    db.query("SELECT * FROM skill;", function (err, result) {
        if (err) throw err;
        res.status(200).json(result);
    });
})

app.get('/api/list_items/', (req, res, next) => {
    const query_sql = "SELECT * FROM item;";
    db.query(query_sql, function (err, result) {
        if (err) throw err;
        res.status(200).json(result);
    });
})



module.exports = app;