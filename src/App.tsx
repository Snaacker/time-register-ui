
import NavBar from "./components/nav/nav-bar";
import Login from "../pages/login";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="container">
        <Login></Login>
      </div>
    </div>
  );
}

export default App;
