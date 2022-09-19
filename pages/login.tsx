import React, { useContext } from "react";
import { Button, Checkbox, Form, Input, Alert } from "antd";
import Card from "antd/lib/card/Card";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import { User } from "../src/type/User";
import { UserContext } from "./_app";
import { useEffect } from "react";
import { useState } from "react";

function Login() {
  const { state, update } = useContext(UserContext)
  const [isUserAuthenticated, updateUserAuthStatus] = useState<Boolean>(false)
  const [isUserCredentialInvalid, updateUserCredentialStatus] = useState<Boolean>(false)
  const onFinish = async (input: { username: String, password: String }) => {

    if (input.username === "test" && input.password === "test") {
      let _user: User = { id: "12", roleName: "ADMIN", userName: input.username }
      update(_user)
      updateUserCredentialStatus(false)
      updateUserAuthStatus(true)
    } else {
      updateUserAuthStatus(false)
      updateUserCredentialStatus(true)
    }


    console.log("Success:", input);
  };

  useEffect(() => {
    console.log("useEffect")
    console.log(state)
  }, [state])

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="vh-100 row justify-content-center">
      <div className=" col-lg-6 col-md-8 col-sm-10 col-xs-12 align-self-center">
        <Card title="Login" >
          {isUserCredentialInvalid ?
            <div className="pb-3">
              <Alert message="Username or password is incorrect." type="error" />
            </div> : null
          }
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              {/* <a aria-disabled="true" className="login-form-forgot" href="">
                Forgot password
              </a> */}
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Or <a href="/signup">register now!</a>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default Login;
