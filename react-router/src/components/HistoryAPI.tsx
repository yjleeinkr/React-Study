import { useEffect } from "react";
const HistoryAPI = () => {
  const goMain = () => {
    history.pushState({ "current-url": "/" }, "", "/");
  };
  const clickPushState = () => {
    history.pushState({ "current-url": "/push", "user-id": 1 }, "", "/push");
  };

  const clickReplaceState = () => {
    history.replaceState(
      { "current-url": "/replace", "user-id": 1 },
      "",
      "/replace"
    );
  };

  useEffect(() => {
    window.onpopstate = (e) => {
      console.log("current location", e.state);
    };
  }, []);

  return (
    <>
      <button onClick={goMain}>goMain</button>
      <button onClick={clickPushState}>pushState</button>
      <button onClick={clickReplaceState}>replaceState</button>
    </>
  );
};

export default HistoryAPI;
