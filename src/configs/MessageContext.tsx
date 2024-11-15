import { createContext, useState } from "react";
import MessageI from "../types/MessageType";


export const MessageContext = createContext<MessageI[] | undefined>(undefined);

export const MessageProvider = ({ children }: any) => {
  const [messageList, setMessageList] = useState<MessageI[]>([
    { username: "test1", text: "test1", date: "15/11/2024 09:41" },

    { username: "João Henrique", text: "Texto de teste - Min browser", date: "Nov 15 2024 09:41" },
    { username: "test1", text: "test1", date: "Nov 15 2024 09:41" }])

  return (
    <MessageContext.Provider value={messageList} >
      {children}
    </MessageContext.Provider>
  )
}
