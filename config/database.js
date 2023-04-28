var mysql = require('mysql'); //import the mysql after installing

/* Connection String For Staging */
var connection = mysql.createConnection({
  host: 'localhost',
  port:3306,
  user: 'root',
  password: '',
  database: 'customer_db',
  multipleStatements: true
});

async function connect()
{
    try
    {
        await new Promise((resolve, reject) => {
          connection.connect(err => {
                return err ? reject(err) : resolve(console.log('Connected to the MySQL server.'))
            })
        })
    }
    catch(err)
    {
      console.log(err)
      return console.error('Database Connection Error: ' + err.sqlMessage);
    }
}
connect()
module.exports = connection;  