import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Slider } from "./components/Slider";
import Footer from "./components/Footer/Footer"
import About from "./components/StaticPages/About"


function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Footer />
      <About />
      
    </div>
  );
}

export default App;
