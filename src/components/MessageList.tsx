import { RiLoader4Line } from "react-icons/ri"
import MessageI from "../types/MessageType"
import { useEffect, useRef } from "react"

interface PropsI {
  loading: boolean
  messageList: MessageI[]
}
function MessageList({ messageList, loading }: PropsI) {
  const currentUser = localStorage.getItem("username")

  const messageListRef = useRef<HTMLDivElement>(null);
  const renderList = messageList?.map((message: MessageI, index: number) => {
    const isCurrentUser = message.username.split(" ").join("-") === currentUser;
    const messageClass = `w-auto max-w-96  p-4 rounded-md text-white ${isCurrentUser ? "self-end bg-blue-500/90" : "bg-slate-800/50"}`



    const messageUserName = isCurrentUser ? "You" : message.username.split("-").join(" ")
    const date = new Date(message.date)
    return (
      < li id={message.username} key={index} className={messageClass} >
        <div className="flex item-center  justify-between gap-x-4">
          <p className="font-bold">{messageUserName}</p>
          <legend className="text-slate-300 text-sm ">{date.toDateString()} {date.getHours()}:{date.getMinutes()}</legend>
        </div>
        <p>
          {message.text}
        </p>
      </li>
    )
  })

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messageList]);

  const loadingElement = <p className="w-4 h-2 animate-spin text-blue-500 text-xl"><RiLoader4Line /></p>

  return (
    <section ref={messageListRef} className="w-full h-full overflow-y-auto box-border py-4 px-8 no-scroll-bar ">
      <ol className="w-full flex flex-col items-start justify-center gap-y-4">
        {loading ? renderList : loadingElement}
      </ol>
    </section>

  )

}
export default MessageList
