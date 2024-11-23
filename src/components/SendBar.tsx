import { useContext, useState } from "react"
import { MdSend } from "react-icons/md"
import { SocketContext } from "../configs/SocketContext"

function SendBar() {
  const [message, setMessage] = useState<string>("")

  const socket = useContext(SocketContext)
  // Função que dependendo do texto presente no input, muda a cor do botão
  // Caso estejá vazio, será tranparente
  // Se estever com algo escrito,será azul 
  const changeButtonColor = () => {
    const btn = document.querySelector("#btn-send-message")

    message !== "" ? btn?.classList.add("bg-blue-500") : btn?.classList.remove("bg-blue-500")
  }

  const handlerSendMessage = () => {
    if (message !== "") {

      const date = new Date()
      const data = {
        action: "NEW MESSAGE",
        data: {
          username: localStorage.getItem("username"),
          text: message,
          date: date.toString()
        }
      }
      socket?.send(JSON.stringify(data))
      setMessage("")
    }
  }

  changeButtonColor()

  return (
    <div className="w-full h-24 box-border p-4 gap-x-2 flex self-end justify-between ">
      <textarea
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enviar mensage..."
        className="w-10/12 h-16 resize-none overflow-scroll no-scroll-bar sm:w-11/12 outline-none rounded-md p-4 
        bg-transparent border-2 border-slate-700 text-slate-300"></textarea>
      <button
        id="btn-send-message"
        onClick={() => handlerSendMessage()}
        className="bg-transparent border-none w-2/12 sm:w-1/12 
        rounded-md
        text-3xl text-slate-300 flex items-center justify-center 
        hover:text-4xl transition-all">
        <MdSend />
      </button>
    </div>
  )
}
export default SendBar
