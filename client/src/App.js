import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatPage from "./components/ChatPage";
import socketIO from "socket.io-client";
import SignIn from "./components/SignIn";

const socket = socketIO.connect("http://localhost:5000", {
  transports: ['websocket']
});
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<SignIn socket={socket} />}></Route>
          <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
