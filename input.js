let connection;

const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === 'w') {
    connection.write("Move: up");
  }
  if (data === 'a') {
    connection.write("Move: left");
  }
  if (data === 's') {
    connection.write("Move: down");
  }
  if (data === 'd') {
    connection.write("Move: right");
  }
  if (data === 'e') {
    connection.write("Say: Do a barrel roll!");
  }
  if (data === 'q') {
    connection.write("Say: I quit!");
  }
  if (data === 'z') {
    connection.write("Say: I'm the best!");
  }
  if (data === 'x') {
    connection.write("Say: No through road");
  }
  if (data === 'c') {
    connection.write("Say: caution!");
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