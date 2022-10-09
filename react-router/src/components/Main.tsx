import useRouter from "../hooks/useRouter";

const Main = () => {
  const { push } = useRouter();
  return (
    <div>
      <h1>Main</h1>
      <button onClick={() => push("/about")}>go About</button>
    </div>
  );
};

export default Main;
