import "./App.css";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

const apiKey = "fvzspsmy2jtk";
const client = StreamChat.getInstance(apiKey);

function App() {
  return (
    <div className="app_wrapper">
      <Chat client={client} theme="team light">
        <ChanelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
}

export default App;
