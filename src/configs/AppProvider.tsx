import { MessageProvider } from "./MessageContext";
const AppProvider = ({ children }: any) => {
  return (
    <MessageProvider>
      {children}
    </MessageProvider>
  )
};

export default AppProvider;
