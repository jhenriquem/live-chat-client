import { FaGithub, FaRocketchat } from "react-icons/fa"

function HeaderChat() {
  return (
    <header className="w-full h-16 bg-slate-800/95 rounded-t-lg text-white flex justify-between p-4 justify-self-start items-center">
      <p className="flex items-center font-bold gap-x-4"><FaRocketchat /> Chat ao vivo</p>
      <a href="https://github.com/jhenriquem/" target="_blank"><FaGithub /></a>
    </header>
  )

}

export default HeaderChat
