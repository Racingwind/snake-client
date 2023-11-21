let connection;

const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === 'w') {
    console.log("Move: up");
  }
  if (data === 'a') {
    console.log("Move: left");
  }
  if (data === 's') {
    console.log("Move: down");
  }
  if (data === 'd') {
    console.log("Move: right");
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