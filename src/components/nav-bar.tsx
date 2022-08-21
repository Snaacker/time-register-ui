import { AppstoreOutlined, HomeOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React, { useState } from "react";
import { useRouter } from "next/router";

const items = [
  {
    label: "Home",
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: "Sign Up",
    key: "signup",
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
];

const NavBar = () => {
  const [current, setCurrent] = useState("home");
  const router = useRouter();
  const onClick = (e: any) => {
    console.log("click ", e);
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
      default:
        break;
    }
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default NavBar;
