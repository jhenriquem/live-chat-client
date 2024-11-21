import { createContext } from "react";

export const SocketContext = createContext<WebSocket | undefined>(undefined)

export const SocketProvider = ({ children }: any) => {
  const socket = new WebSocket(import.meta.env.VITE_WS_URL)

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )

}
