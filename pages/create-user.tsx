import React from "react";
import { Button, Form, Input, Select } from "antd";
import Card from "antd/lib/card/Card";

function CreateUser() {
  const { Option } = Select;

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="vh-100 row justify-content-center">
      <div className=" col-6 align-self-center">
        <Card title="Create a new user" style={{ width: 600 }}>
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
              name="userrole"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
            >
              <Select defaultValue="employee" style={{ width: 120 }}>
                <Option value="manager">Manager</Option>
                <Option value="admin">Admin</Option>
                <Option value="employee">Employee</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="First name"
              name="firstname"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Last name"
              name="lastname"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Username"
              name="username"
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
              name="Email"
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
