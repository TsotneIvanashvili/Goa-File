import "./App.css";
import useToggle from "./Hooks/useToggle";

function App() {
  const [data, toggleData] = useToggle(false);

  return (
    <main
      className={`h-screen flex items-center justify-center transition ${
        data ? "bg-black" : "bg-white"
      }`}
    >
      <button
        onClick={toggleData}
        className={`rounded-full p-5 transition ${
          data
            ? "bg-white text-black"
            : "bg-black text-white"
        }`}
      >
        Click To Change Mode
      </button>
    </main>
  );
}

export default App;