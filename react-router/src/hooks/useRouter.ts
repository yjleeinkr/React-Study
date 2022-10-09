import { useContext } from "react";
import RouterContext from "../router/RouterContext";

const useRouter = () => {
  const { location, setLocation } = useContext(RouterContext);

  const push = (url: string) => {
    if (location === url) return;
    window.history.pushState(url, "", url);
    setLocation(url);
  };

  return { push };
};

export default useRouter;
