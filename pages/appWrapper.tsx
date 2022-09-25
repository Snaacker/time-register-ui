import NavBar from "../src/components/nav/nav-bar";
import { createCtx } from "../src/contexts/AppContext";
import { User } from "../src/type/User";

const [ctx, UserProvider] = createCtx<User>({id:"",roleName:"",userName:""}, "stateUser", "updateUser");
export const UserContext = ctx;
export default function AppWrapper( {children}:any) {
    return (
        <UserProvider>
            <div>
                <NavBar></NavBar>
               <main>{children}</main>
            </div>
        </UserProvider>
    );
}