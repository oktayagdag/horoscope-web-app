
var express = require("express")
var app = express()
var cors = require('cors')
var db = require('./database.js')
var bodyParser = require("body-parser");



app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Server port
var HTTP_PORT = 8000
// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});
// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

// Insert here other API endpoints

app.get("/api/ozellikler/:burc", (req, res, next) => {
    var sql = "select * from ozellikler where burc = ?"
    var params = [req.params.burc]
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});

app.post("/api/ozellikler/:burc", (req, res, next) => {
    var data = {
        burc: req.params.burc,
        aciklama: req.body.aciklama,
        tarih: req.body.tarih
    }
    var sql ='INSERT INTO ozellikler (burc, aciklama,tarih) VALUES (?,?,?)'
    var params =[data.burc, data.aciklama,data.tarih]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : this.lastID
        })
    });
})


app.patch("/api/ozellikler/:id", (req, res, next) => {
    var data = {
        aciklama: req.body.aciklama,
        tarih: req.body.tarih
    }
    db.run(
        `UPDATE ozellikler set 
           aciklama = COALESCE(?,aciklama) , tarih = COALESCE(?,tarih)
           WHERE id = ?`,
        [data.aciklama, data.tarih, req.params.id],
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({
                message: "success",
                data: data,
                changes: this.changes
            })
    });
})


app.delete("/api/ozellikler/:id", (req, res, next) => {
    db.run(
        'DELETE FROM ozellikler WHERE id = ?',
        req.params.id,
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"deleted", changes: this.changes})
    });
})



// Default response for any other request
app.use(function(req, res){
    res.status(404);
});