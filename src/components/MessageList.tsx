import { useContext } from "react"
import { MessageContext } from "../configs/MessageContext"
import MessageI from "../types/MessageType"

function MessageList() {
  const messageList = useContext(MessageContext)
  const currentUser = localStorage.getItem("username")

  const renderList = messageList?.map((message: MessageI, index: number) => {
    const isCurrentUser = message.username.split(" ").join("-") === currentUser;
    const messageClass = ` w-auto max-w-96  p-4 rounded-md text-white ${isCurrentUser ? "self-end bg-blue-500/90" : "bg-slate-800/50"}`

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
  return (
    <section className="flex flex-col py-4 px-8 gap-y-4 ">
      {renderList}
    </section>

  )

}
export default MessageList
