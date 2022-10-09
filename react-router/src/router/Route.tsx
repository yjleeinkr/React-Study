import React, { useContext } from "react";
import RouterContext from "./RouterContext";

type RouteProps = {
  path: string;
  element: React.ReactElement | null;
};

const Route = ({ path, element }: RouteProps) => {
  const { location } = useContext(RouterContext);
  if (path !== location) return;
  return <div>{element}</div>;
};

export default Route;
