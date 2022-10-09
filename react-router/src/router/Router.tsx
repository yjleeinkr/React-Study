import React, { useContext, useEffect, useState } from "react";
import RouterContext from "./RouterContext";

type Router = {
  children: React.ReactNode;
};
const Router: React.FC<Router> = ({ children }) => {
  const { pathname } = window.location;
  const [location, setLocation] = useState(pathname);

  useEffect(() => {
    window.onpopstate = (e) => {
      console.log("current path", e.state);
      if (e.state === null) return setLocation("/");
      setLocation(e.state);
    };
  }, []);

  return (
    <RouterContext.Provider value={{ location, setLocation }}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;
