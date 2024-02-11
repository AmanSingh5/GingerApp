const express = require('express');
const mysql = require('mysql');
const cors= require('cors');


const app = express();

app.use(cors());

app.use(express.json());

const db=mysql.createConnection({
    host: 'sql6.freesqldatabase.com',
    user: 'sql6682958',
    password: 'W41YMe33kj',
    database: 'sql6682958'
})

app.post('/signup',(req,res)=>{
    const sql = "INSERT INTO login ('userName','password','confirmPassword') VALUES (?)";
    const values = [
        req.body.username,
        req.body.password,
        req.body.confirmPassword,
        
    ];
    db.query(sql,[values],(err,data)=>{
        console.log("data of query",data);
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    }) 
})

app.post('/login', (req, res) => {
    console.log("req",req);
    const sql = "SELECT * FROM login WHERE username = ? AND password = ?";
    
    db.query(sql, [req.body.username, req.body.password], (err, data) => {
      if (err) {
        console.error("Database error:", err.message);
        return res.status(500).json({ error: "Database error" });
      }
      if (data.length > 0) {
        return res.json("Success");
      } else {
        return res.json("Fail");
      }
    });
  });  



app.get('/getUserDetails', (req, res) => {
   
    const sql = "SELECT * FROM login";
    db.query(sql,(err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error fetching user details" });
        }
         else {
            return res.json(data);
        }
    });
});


app.put('/editUserDetail/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const sql =
    "SELECT * FROM login `firstName`=?, `lastName`=?, `email`=?, `age`=?, `dob`=?, WHERE id = ?";
  const values = [
    req.body.firstName,
    req.body.lastName,
    req.body.email,
    req.body.age,
    req.body.dob,
  ];
  db.query(sql, [...values, bookId], (err, data) => {
    if (err) {
      console.error("Database error:", err.message);
      return res.status(500).json({ error: "Database error" });
    } else {
      return res.json("Book has been updated successfully");
    }
  });
});


app.listen(3000,(req,res) => {
console.log("Server is live on port 3000")
});