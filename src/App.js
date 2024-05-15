import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import RoutesConfig from "./routes/RoutsConfig";
import SearchBar from "./components/layout/SearchBar";
import LangContext from "./components/context/Lang";
import { useState } from "react";
function App() {
  const [lang, setLang] = useState("en");
  return (
    <BrowserRouter>
      <LangContext.Provider value={{ lang, setLang }}>
        <Navbar />
        <SearchBar />
        <div className="my-5 container">
          <RoutesConfig />
        </div>
      </LangContext.Provider>
    </BrowserRouter>
  );
}

export default App;
