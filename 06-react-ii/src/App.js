import "./App.css";
import { Navbar, Todos, Background } from "./components";
import NewComponent from "./components/NewComponent";

function App() {
  return (
    <div className="main">
      {/* <Background /> */}
      {/* <Navbar title="Netflix" logo="LOGO" /> */}
      <NewComponent />
      {/* <p>Footer</p> */}
    </div>
  );
}

export default App;
