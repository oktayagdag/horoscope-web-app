var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE ozellikler (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            burc text, 
            aciklama text,
            tarih text)`,
        (err) => {
            if (err) {
                // Table already created
                console.log('Database önceden mevcut.')
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO ozellikler (burc, aciklama,tarih) VALUES (?,?,?)'
                db.run(insert, ["oglak","Sevgili Oğlaklar ve yükselen burcu Oğlaklar, 2023 sizin için kuralları yeniden yazacağınız bir yıl olabilir.","28.12.2022"])
            }
        });  
    }
});

module.exports = db