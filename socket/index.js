const { Server } = require("socket.io");

const io = new Server({
  cors: "http://localhost:3000",
});

let onlineUsers = [];

io.on("connection", (socket) => {
  console.log(socket.id);

  //listen to a connection
  socket.on("addNewUser", (userId) => {
    !onlineUsers.some((user) => user.userId === userId) &&
      onlineUsers.push({
        userId,
        socketId: socket.id,
      });
    console.log("onlineUsers: ", onlineUsers);
  });

  socket.on("sendMessage", (message) => {
    const user = onlineUsers.find(
      (user) => user.userId === message.recipientId
    );

    if (user) {
      console.log(user);
      io.to(user.socketId).emit("getMessage", message);
    }
    console.log(message);
  });
});

io.listen(3001);
