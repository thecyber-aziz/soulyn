import Navbar from "./components/Navbar";
import ReactRouter from "./router/ReactRouter";

function App() {
  return (
    <div
      className="
      bg-[var(--bg)]
      text-[var(--text)]
      min-h-screen
      transition-all
      duration-500
    "
    >
      <Navbar />
      <ReactRouter />
    </div>
  );
}

export default App;