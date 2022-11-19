import { AppstoreOutlined, HomeOutlined, UserOutlined, CaretDownOutlined } from "@ant-design/icons";
import { Avatar, Menu, Image, Dropdown, Button, Space } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../../pages/appWrapper";
import { User } from "../../type/User";


const mainNavBar = [
  {
    label: "Home",
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: "Sign Up",
    key: "signup",
    className: "d-none",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Restaurant Management",
    key: "restaurant-management",
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
    className: "float-right",
    icon: <AppstoreOutlined />,
  }
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
      case "restaurant-management":
        router.push("restaurant-management");
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
  }, [state])

  const userProfileMenu = (
    <Menu
      items={[
        {
          label: <a href="https://www.antgroup.com">1st menu item</a>,
          key: '0',
        },
        {
          label: <a href="https://www.aliyun.com">2nd menu item</a>,
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: '3rd menu item',
          key: '3',
        },
      ]}
    />
  );

  const userProfile = (
    <div className="w-user-profile float-end">
      <Menu
        mode="horizontal"
        selectable={false}
      >
        <Menu.Item>
          <Dropdown overlay={userProfileMenu} trigger={['click']}>
            <a onClick={e => e.preventDefault()}>
              <Space>
               
                <UserOutlined className="fs-5"/>
                <CaretDownOutlined/>
              </Space>
            </a>
          </Dropdown>
        </Menu.Item>

      </Menu>
    </div>

  );

  return (
    <div>
      {userProfile}
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        // show only dashboard, user profile when user.role = EMPLOYEE
        //  show only dashboard, user profile, create restaurant, create user, create schedule when user.role = MANAGER
        // show all when user.role = ADMIN
        items={state.isAuthenticated ? mainNavBar : [{
          label: "Home",
          key: "home",
          icon: <HomeOutlined />,
        }]}
      >
      </Menu>
    </div>

  );
};

export default NavBar;
