const { Server } = require("socket.io");

const io = new Server({
  cors: "http://localhost:3000",
});

io.on("connection", (socket) => {
  socket.on("sendMessages", (data) => {
    const modifiedMessage = {
      socketID: socket.id,
      message: data,
    };
    io.emit("recieveMessages", modifiedMessage);
  });
});

io.listen(3001);
