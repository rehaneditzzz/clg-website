import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <About/>
    </BrowserRouter>
  );
}