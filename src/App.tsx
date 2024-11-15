import { useState } from "react"
import WelcomePopUp from "./components/Welcome_PopUp"
import ChatMessages from "./components/chatMessages"
import AppProvider from "./configs/AppProvider"

function App() {
  const username = localStorage.getItem("username")
  const [loadChat, setLoadChat] = useState<boolean>(username ? true : false)

  return (
    <AppProvider>
      <WelcomePopUp setLoadChat={setLoadChat} username={username} />
      {loadChat ? < ChatMessages /> : " "}
    </AppProvider>
  )
}

export default App
