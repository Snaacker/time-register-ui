import { useContext } from "react";
import { UserContext } from "./appWrapper";

function Home() {

  const { state, update } = useContext(UserContext)

  return (
    <div className="row pt-5">
        Hallo {state.user_name} 
    </div>
  );
}

export default Home;
