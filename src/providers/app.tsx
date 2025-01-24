import { BrowserRouter } from "react-router-dom";

interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
