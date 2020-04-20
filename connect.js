let mysql = require('mysql');

// let connection = mysql.createConnection({
//   host: 'dolindevanbeek.com',
//   user: 'dolindevanbeek_com_circulate',
//   password: 'Neighbours2020',
//   database: 'dolindevanbeek_com_circulate'
// });

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'circulate',
  port: '8889'
});

connection.connect(function (err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  let creategamestable = "create table if not exists gamesplayed(id int primary key auto_increment, circulatecard tinyint(2) default 0, circulateoption tinyint(2) default 0)";

  connection.query(creategamestable, function (err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });

  connection.end(function (err) {
    if (err) {
      return console.log('error:' + err.message);
    }
    console.log('Close the database connection.');
  });

});

