import io from "socket.io-client";
import { useState } from "react";

const socket = io.connect(
  "https://samsara-chat.herokuapp.com/chatroom/check-chat?token=6ba855c88f67c3fbf9a864ef617e41a696745fbb&receiver=saken2.0"
);

// const socket = io.connect("http://localhost:3001");

function App() {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    try {
      console.log(socket, "socket");
      const emitedmessage = socket.emit("send_message", { message });
      console.log(emitedmessage, "emitedmessage");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="App">
      <input
        placeholder="Message..."
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button onClick={sendMessage}> Send Message</button>
    </div>
  );
}

export default App;
