import HeaderChat from "./Header"
import MessageList from "./MessageList"
function ChatMessages() {
  return (
    <main
      className="bg-slate-800/90 w-full h-screen md:w-[50rem] md:h-[35rem] flex flex-col mx-auto self-center md:rounded-xl">
      <HeaderChat />
      <MessageList />
    </main>
  )

}

export default ChatMessages
