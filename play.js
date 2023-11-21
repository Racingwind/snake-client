const client = require("./client");
const input = require("./input");

console.log("Connecting ...");
input.setupInput(client.connect());
