import { useState } from "react"
import { FaRocketchat } from "react-icons/fa"
import { MdClose } from "react-icons/md"

function closePopUp() {
  const popUp = document.querySelector(".PopUp")
  popUp?.classList.toggle("hidden")
}

function WelcomePopUp({ setLoadChat, username }: any) {
  const [userName, SetUserName] = useState<string>(" ")


  const saveUserName = () => {

    localStorage.setItem("username", userName)
    closePopUp()
    setLoadChat(true)
  }
  if (!username) {
    return (
      <div
        className="PopUp bg-slate-800 max-w-96 h-72 absolute rounded-xl shadow-lg
        p-6 flex flex-col self-center  items-center gap-y-8 text-gray-100 font-bold">
        <h1
          className="text-white font-bold flex items-center gap-x-2 text-lg">
          <FaRocketchat /> Bem-vindo ao nosso chat
        </h1>
        <p>Qual o seu nome ?</p>
        <input
          type="text"
          className="bg-transparent border-2 border-slate-300 rounded-lg outline-none p-2"
          placeholder="Seu Nome"
          required value={userName}
          onChange={(e) => SetUserName(e.target.value)} />
        <button
          id="save-name-button"
          className="rounded-lg bg-sky-500 py-2 px-8 hover:scale-110 transition-all"
          onClick={() => saveUserName()}
        > Entrar
        </button>
      </div>
    )
  }
  return (
    <div
      className="PopUp bg-slate-800 max-w-96 h-auto absolute rounded-xl shadow-lg
        p-6 flex flex-col self-center  gap-x- text-gray-100 font-bold">
      <button className="absolute top-2 right-2" onClick={() => closePopUp()}><MdClose /></button>
      <h1
        className="text-white font-bold flex items-center gap-x-2 text-lg text-center">
        <FaRocketchat className="text-4xl" /> Bem-vindo de volta ao nosso chat, {username}
      </h1>
    </div>
  )

}

export default WelcomePopUp
