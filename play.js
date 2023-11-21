const client = require("./client");
const input = require("./input");



console.log("Connecting ...");
client.connect();
input.setupInput();
