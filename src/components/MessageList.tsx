import { useContext } from "react"
import { MessageContext } from "../configs/MessageContext"
import MessageI from "../types/MessageType"

function MessageList() {
  const messageList = useContext(MessageContext)
  const changeLocationMessage = () => {
    const currentUser = localStorage.getItem("username")
    const messageDiv = document.querySelector(`#${currentUser}`)
    messageDiv?.classList.add("self-end")
  }
  const renderList = messageList?.map((message: MessageI, index: number) => {
    changeLocationMessage()
    return (
      <div id={message.username} key={index} className="bg-slate-800/90 w-96 rounded-sm">
        <div> <p>{message.username}</p> <legend>{message.date}</legend></div >
        <p>
          {message.text}
        </p>
      </div >
    )
  }
  )

  return (
    <section className="flex flex-col">
      {renderList}
    </section>

  )

}
export default MessageList
