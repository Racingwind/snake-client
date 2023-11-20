const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '172.19.2.194', // IP address here,
    port: '50541' // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connected");
    conn.write("Name: LHU");
    conn.write("Move: up");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);
  });
  
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });


  return conn;
};

module.exports = {connect};