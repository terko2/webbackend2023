const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) 
{
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
      
    );   
    next();
  });

  
  var connection
  function Kapcsolat(){
    var mysql = require('mysql')

    connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'nyaralas'
    })
    
    connection.connect()
    
  }
  
  
 
  //-------Autó Lekérdezés-------//
   app.get('/auto', (req, res) => {
    
    Kapcsolat()  
    connection.query('SELECT * from auto', (err, rows, fields) => {
      if (err) throw err
    
      res.send(rows)
    })
    
    connection.end()
  })
//------------------------     Szalloda lekérdezése
app.get('/szalloda', (req, res) => {
    
  Kapcsolat()  
  connection.query('SELECT * from szalloda', (err, rows, fields) => {
    if (err) throw err
  
    res.send(rows)
  })
  
  connection.end()
})


  //------------------------     Autó akció lekérdezése
  app.get('/auto_akcio', (req, res) => {
    
    Kapcsolat()  
    connection.query('SELECT * from auto where auto_akcio=1', (err, rows, fields) => {
      if (err) throw err
    
      res.send(rows)
    })
    
    connection.end()
  })
   //------------------------     Autó napi ára
   app.get('/auto_napiar', (req, res) => {
      
    Kapcsolat()  
    connection.query('SELECT * from auto where auto_napiar=1', (err, rows, fields) => {
      if (err) throw err
    
      res.send(rows)
    })
    
    connection.end()
  })
  //------------------------     Autó akciós ár
  app.get('/auto_akcios_ar', (req, res) => {
      
    Kapcsolat()  
    connection.query('SELECT * from auto where auto_akcios_ar=1', (err, rows, fields) => {
      if (err) throw err
    
      res.send(rows)
    })
    
    connection.end()
  })
  //------------------------     Autó_évjárat lekérdezése
  app.get('/auto_evjarat', (req, res) => {
    
    Kapcsolat()
    connection.query('SELECT * from auto_evjarat', (err, rows, fields) => {
      if (err) throw err
    
      res.send(rows)
    })
    
    connection.end()
  })
  //------------------------     Szalloda lekérdezése
  app.get('/szalloda', (req, res) => {
      
    Kapcsolat()  
    connection.query('SELECT * from szalloda', (err, rows, fields) => {
      if (err) throw err
    
      res.send(rows)
    })
    
    connection.end()
  })
  //------------------------Elérhetőség lekérdezése
  app.get('/elerhetoseg', (req, res) => {
      
    Kapcsolat()  
    connection.query('SELECT * from elerhetoseg', (err, rows, fields) => {
      if (err) throw err
    
      res.send(rows)
    })
    
    connection.end()
  })
  //------------------------     Látványoságok lekérdezése
  app.get('/latvanyosag', (req, res) => {
      
    Kapcsolat()  
    connection.query('SELECT * from latvanyosag', (err, rows, fields) => {
      if (err) throw err
    
      res.send(rows)
    })
    
    connection.end()
  })
  //-----Keres
  app.post('/keres', (req, res) => {
    kapcsolat()
  let parancs="select * from nyaralas where film.cim like '%"+req.body.bevitel1+"%'"
    connection.query(parancs, (err, rows, fields) => {
      if (err) console.log(err)
    else
      res.send(rows)
    })
   
    connection.end()
  })
  //--------Kölcsönzés -----------
  app.get('/kolcsonzes', (req, res) => {
    
    Kapcsolat()  
    connection.query('SELECT * FROM kolcsonzes inner JOIN auto ON auto.auto_id=kolcsonzes.auto_id', (err, rows, fields) => {
      if (err) throw err
    
      res.send(rows)
    })
    
    connection.end()
  })
    
  
  
  app.get('/auto_adatok', (req, res) => {
      
    Kapcsolat()  
    connection.query('SELECT * from auto_adatok', (err, rows, fields) => {
      if (err) throw err
    
      res.send(rows)
    })
    
    connection.end()
  })


};
