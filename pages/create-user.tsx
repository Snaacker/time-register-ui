import React from "react";
import { Button, Form, Input, Select } from "antd";
import Card from "antd/lib/card/Card";
import { User } from "../src/type/User";
import { createUser } from "../src/api-manager/user";

function CreateUser() {
  const { Option } = Select;

  const onFinish = (values: User) => {
    createUser(values)
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="vh-100 row justify-content-center">
      <div className=" col-lg-6 col-md-8 col-sm-10 col-xs-12 align-self-center">
        <Card title="Create a new user">
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
          >
            <Form.Item
              label="User role"
              name="roleName"
              rules={[
                { required: true, message: "Please input your role!" },
              ]}
            >
              <Select>
                <Option value="MANAGER">Manager</Option>
                <Option value="ADMIN">Admin</Option>
                <Option value="EMPLOYEE">Employee</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="First name"
              name="firstName"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Last name"
              name="lastName"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Username"
              name="userName"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: "Please input your address" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Phone number"
              name="phoneNumber"
              rules={[
                { required: true, message: "Please input your phone number" },
              ]}
            >
              <Input type={"number"} />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your Email" }]}
            >
              <Input type={"email"} />
            </Form.Item>
            <Form.Item className="float-right">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default CreateUser;
