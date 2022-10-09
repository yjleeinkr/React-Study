import React, { useContext } from "react";
import RouterContext from "./RouterContext";

type RouteProps = {
  path: string;
  element: React.ReactElement | null;
};

const Route = ({ path, element }: RouteProps) => {
  const { location } = useContext(RouterContext);
  if (path === location) {
    return <div>{element}</div>;
  } else {
    return <div></div>;
  }
};

export default Route;
