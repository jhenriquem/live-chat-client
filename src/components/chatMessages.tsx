import MessageI from "../types/MessageType"
import HeaderChat from "./Header"
import MessageList from "./MessageList"
import SendBar from "./SendBar"

interface PropsI {
  messageList: MessageI[],
  loading: boolean
}

function ChatMessages(props: PropsI) {
  return (
    <main
      className="bg-slate-800/90 w-full h-screen md:w-[50rem] md:h-[35rem] flex flex-col justify-between  mx-auto self-center md:rounded-xl">
      <HeaderChat />
      <MessageList messageList={props.messageList} />
      <SendBar />

    </main>
  )

}

export default ChatMessages
