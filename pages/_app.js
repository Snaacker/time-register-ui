import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import "../src/index.css";
import NavBar from "../src/components/nav-bar";
import { UserContext } from "../src/contexts/userContext";
export default function MyApp({ Component, pageProps }) {
  return (
    <UserContext.Provider>
      <div>
        <NavBar></NavBar>
        <div className="container">
          <Component {...pageProps} />
        </div>
      </div>
    </UserContext.Provider>
  );
}
