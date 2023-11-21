const {KEYS} = require("./constants");
let connection;

const handleUserInput = (data) => {
  if (data === '\u0003') {
    process.exit();
  }
  if (KEYS[data]) {
    connection.write(KEYS[data]);
  }
};

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = {setupInput};