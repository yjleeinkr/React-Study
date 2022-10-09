import { createContext, Dispatch, SetStateAction, useState } from "react";

interface RouterContext {
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
}

const { pathname } = window.location;
const RouterContext = createContext<RouterContext>({
  location: pathname,
  setLocation: useState,
});

export default RouterContext;
