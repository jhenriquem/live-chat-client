import { RiLoader4Line } from "react-icons/ri"
import MessageI from "../types/MessageType"

interface PropsI {
  loading: boolean
  messageList: MessageI[]
}
function MessageList({ messageList, loading }: PropsI) {
  const currentUser = localStorage.getItem("username")

  const renderList = messageList?.map((message: MessageI, index: number) => {
    const isCurrentUser = message.username.split(" ").join("-") === currentUser;
    const messageClass = `w-auto max-w-96  p-4 rounded-md text-white ${isCurrentUser ? "self-end bg-blue-500/90" : "bg-slate-800/50"}`

    const messageUserName = isCurrentUser ? " " : message.username
    return (
      <div id={message.username} key={index} className={messageClass}>
        <div className="flex item-center justify-between gap-x-4">
          {!isCurrentUser ? <p className="font-bold">{messageUserName}</p> : " "}
          <legend className="text-slate-300 text-sm ">{message.date}</legend>
        </div>
        <p>
          {message.text}
        </p>
      </div >
    )
  })

  const loadingElement = <p className="w-4 h-2 animate-spin text-blue-500 text-xl"><RiLoader4Line /></p>
  return (
    <section className="h-full flex flex-col items-center justify-center py-4 px-8 gap-y-4 ">
      {loading ? renderList : loadingElement}
    </section>

  )

}
export default MessageList
