const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '192.168.88.254',
    port: 50541
  });
 // interpret incoming data as text
 
 conn.setEncoding('utf8');

 conn.on('connect', () => {
   console.log('Successfully connected to game server!');
   conn.write("Name: AMF");
  //  conn.write("Move: up");
  //  conn.write("Move: down");
  //  conn.write("Move: right");
  //  conn.write("Move: left");
 }); 

 conn.on('data', (data) => {
     console.log("Server says: ", data);
 
conn.setEncoding('utf8');

 return conn;
 });
 };

module.exports = { connect };
