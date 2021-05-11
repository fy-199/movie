import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header";
import { Slider } from "./components/Slider";
import Footer from "./components/Footer/Footer";
import About from "./components/StaticPages/About";
import Contact from "./components/StaticPages/ContactUs";
import Policies from "./components/StaticPages/Policies";
import Terms from "./components/StaticPages/Terms";


function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Footer />
      <About />
      <Contact />
      <Policies />
      <Terms />

      
    </div>
  );
}

export default App;
