import { createContext, Dispatch, SetStateAction } from "react";

interface RouterContext {
  location: string;
  setLocation: Dispatch<SetStateAction<string>> | null;
}

const { pathname } = window.location;
const RouterContext = createContext<RouterContext>({
  location: pathname,
  setLocation: null,
});

export default RouterContext;
