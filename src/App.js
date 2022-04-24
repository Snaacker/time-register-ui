import React, { createContext, useState, useEffect } from "react";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/login/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Home from "./pages/home/Home";
import MyPage from "./pages/my-page/MyPage";
export const UserContext = createContext();

const App = () => {
    const [user, setUser] = useState({ loggedIn: false });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<ProtectedRoutes />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/my-page" element={<MyPage />} />
                </Route>
            </Routes>
        </UserContext.Provider>
    );
}

export default App
