const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  
  var connection
  function db_connect(){
    var mysql = require('mysql')

    connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'testdb_auth'
    })
    
    connection.connect()
    
  }
  
  
  app.get('/film', (req, res) => {

    db_connect()
      connection.query('SELECT * from film', function (err, rows, fields) {
        if (err) throw err
      
        console.log(rows)
        res.send(rows)
      })
      
      connection.end()
   })
  




};
