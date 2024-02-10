import "./App.css";
import FaqJeeAdvance from "./components/FaqJeeAdvance";
import FaqJeeMain from "./components/FaqJeeMain";
import FaqNeet from "./components/FaqNeet";
import JeeAdvance from "./components/JeeAdvance";
import JeeMains from "./components/JeeMains";
import Neet from "./components/Neet";
import Ntse from "./components/ntse";

function App() {
  return (
    <>
      <Ntse />
      <JeeMains />
      <FaqJeeMain/>
      <JeeAdvance/>
      <FaqJeeAdvance />
      <Neet/>
      <FaqNeet/>
    </>
  );
}

export default App;
