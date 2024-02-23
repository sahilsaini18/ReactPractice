import "./App.css";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar title="TextUtils2" aboutText="About" />
      <div className="container">
        <TextForm/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
