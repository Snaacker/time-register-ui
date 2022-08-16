import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import NavBar from "../src/components/nav-bar";
export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar></NavBar>
      <Component {...pageProps} />
    </div>
  );
}
