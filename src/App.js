import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className="App"></div>
    </div>
  );
}
