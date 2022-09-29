import { useContext } from "react";
import { UserContext } from "./appWrapper";

function Home() {

  const { state, update } = useContext(UserContext)

  return (
    <div className="row pt-5">
        Hallo {state.userName} 
    </div>
  );
}

export default Home;
