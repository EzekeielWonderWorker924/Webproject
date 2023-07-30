const express = require('express');

const app = express();

const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static('.'))

io.on('connection', (socket) => {
  console.log('a user connected');
});

app.listen(process.env.PORT || 3303, () => console.log("Server running... http://localhost:3303'"));