//const io = require("socket.io-client");

const socket = io("http://localhost:3535");

function emitHello() {
  socket.emit("message", "hello_2");
}

// handle the event sent with socket.send()

const sockethandlers = [];

function sEmit(data) {
  socket.emit("message", data);
}

function socketHandler(data) {}

socket.on("message", (data) => {
  console.log(data);
  sockethandlers.map((h) => h(data));
  /*
  let lms = document.getElementById("lastMsg");
  console.log(lms);
  lms.appendChild(document.createTextNode(data));
  */
});
