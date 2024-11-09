import { useState } from "react"
import WelcomePopUp from "./components/Welcome_PopUp"
import ChatMessages from "./components/chatMessages"

function App() {
  const username = localStorage.getItem("username")
  const [loadChat, setLoadChat] = useState<boolean>(username ? true : false)

  return (
    <>
      <WelcomePopUp setLoadChat={setLoadChat} username={username} />
      {loadChat ? < ChatMessages /> : " "}
    </>
  )
}

export default App
