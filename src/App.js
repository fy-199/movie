import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Slider } from "./components/Slider";
import { Parallax } from "./components/Parallax";

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Parallax />
    </div>
  );
}

export default App;
