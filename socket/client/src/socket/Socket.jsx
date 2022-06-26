import "./Socket.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect(
  "https://samsara-chat.herokuapp.com/?token=f45ac2bd7f9cae97d7f8772980a4e735cc5408cc"
);

function Socket() {
  //Room State
  const [room, setRoom] = useState("");

  // console.log(room,'room')

  // Messages States
  const [message, setMessage] = useState({
    room_id: 5,
    text: "hello from test socket",
  });
  const [messageReceived, setMessageReceived] = useState("");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    try {
      socket.emit("message", message);
      console.log("msg sent");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    socket.on("list", (data) => {
      console.log(data, "data");
      setMessageReceived(data.message);
    });
  }, [socket]);
  return (
    <div className="App">
      <input
        placeholder="Room Number..."
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button onClick={joinRoom}> Join Room</button>
      <input
        placeholder="Message..."
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button onClick={sendMessage}> Send Message</button>
      <h1> Message:</h1>
      {messageReceived}
    </div>
  );
}

export default Socket;
