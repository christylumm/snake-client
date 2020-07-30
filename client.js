//Establishes connection with the game server
const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });
  
  //Interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('connection successful');
    conn.write('Name: CEL');
  })

  return conn;
}

module.exports = connect;


/*

Movement commands supported by game server: 
"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left)

*/