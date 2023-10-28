import "./styles.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SecondNav from "./components/SecondNav";
import SearchSection from "./components/SearchSection";
import Button from "./components/Button";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SecondNav />
      <SearchSection />
      <Button>Search </Button>
    </div>
  );
}
