import { AppstoreOutlined, HomeOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../../pages/appWrapper";
import { User } from "../../type/User";


const items = [
  {
    label: "Home",
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: "Sign Up",
    key: "signup",
    className:"d-none",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Create User",
    key: "create-user",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Create Restaurant",
    key: "create-restaurant",
    icon: <AppstoreOutlined />,
  },
  {
    label: "User Management",
    key: "user-management",
    icon: <AppstoreOutlined />,
  },
  {
    label: "User Profile",
    key: "user-profile",
    icon: <AppstoreOutlined />,
  },
];

const NavBar = () => {
  const [current, setCurrent] = useState("home");
  const { state, update } = useContext(UserContext)
  const router = useRouter();
  const onClick = (e: any) => {
    console.log(state)
    setCurrent(e.key);
    switch (e.key) {
      case "home":
        router.push("/");
        break;
      case "signup":
        router.push("signup");
        break;
      case "create-user":
        router.push("create-user");
        break;
      case "create-restaurant":
        router.push("create-restaurant");
        break;
      case "user-management":
        router.push("user-management");
        break;
      case "user-profile":
        router.push("user-profile");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
   console.log(state)
  }, [ state])

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={state.isAuthenticated ? items:  [{
        label: "Home",
        key: "home",
        icon: <HomeOutlined />,
      }]}
    />
  );
};

export default NavBar;
