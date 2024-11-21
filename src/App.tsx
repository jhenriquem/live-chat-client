import { useContext, useEffect, useState } from "react"
import WelcomePopUp from "./components/Welcome_PopUp"
import MessageI from "./types/MessageType";
import { SocketContext } from "./configs/SocketContext";
import MessageList from "./components/MessageList";
import HeaderChat from "./components/Header";
import SendBar from "./components/SendBar";

function App() {
  const username = localStorage.getItem("username")
  const [loadChat, setLoadChat] = useState<boolean>(username ? true : false)
  const [messageList, setMessageList] = useState<MessageI[]>([])

  const socket = useContext(SocketContext)
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    if (!socket) return;

    const handleMessage = (event: MessageEvent) => {
      try {
        const parsedData = JSON.parse(event.data);
        setMessageList(parsedData.list);
        setLoading(true)
      } catch (error) {
        console.error("Erro ao processar a mensagem do WebSocket:", error);
      }
    };

    socket.addEventListener("message", handleMessage);

    // Cleanup do event listener
    return () => {
      socket.removeEventListener("message", handleMessage);
    };
  });

  return (
    <>
      <WelcomePopUp setLoadChat={setLoadChat} username={username} />
      {loadChat ?
        <main
          className="bg-slate-800/90 w-full h-screen md:w-[50rem] md:h-[35rem] flex flex-col justify-between  mx-auto self-center md:rounded-xl">
          <HeaderChat />
          <MessageList loading={loading} messageList={messageList} />
          <SendBar />
        </main>
        : " "}
    </>
  )
}

export default App
