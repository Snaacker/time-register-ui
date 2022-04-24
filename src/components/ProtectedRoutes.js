import { useContext, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../App";

const useAuth = () => {
    const { user } = useContext(UserContext);
    const loggedInUser = localStorage.getItem("isAuth");
    console.log('Is logged in: ', user && loggedInUser);
    return user && loggedInUser;
};

const ProtectedRoutes = () => {
    const location = useLocation();
    const isAuth = useAuth();
    // useEffect(() => {
    //     console.log('user has logged in: ', loggedInUser);
    //     // const foundUser = JSON.parse(loggedInUser);
    //     setUser(loggedInUser);
    // }, []);

    return isAuth ? (
        <Outlet />
    ) : (
        <Navigate to="/login" replace state={{ from: location }} />
    );
};

export default ProtectedRoutes;
