import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import "../src/index.css";
import NavBar from "../src/components/nav/nav-bar";
import { createCtx } from "../src/contexts/userContext";

const [ctx, UserProvider] = createCtx({});
export const UserContext = ctx ;
export default function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <div>
        <NavBar></NavBar>
        <div className="container">
          <Component {...pageProps} />
        </div>
      </div>
    </UserProvider>
  );
}
