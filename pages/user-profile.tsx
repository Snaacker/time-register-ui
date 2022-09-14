import { Avatar, Button, Form, Input, Select } from 'antd';
import Card from "antd/lib/card/Card";
import React from 'react';
import { AntDesignOutlined } from '@ant-design/icons';


const UserProfile = () => {
  const { Option } = Select;
  return (
    <div className='row pt-5 justify-content-center'>

      <div className='col-lg-8 col-md-8 col-sm-10 col-xs-12 center-element pb-5'>
        <Avatar
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
          icon={<AntDesignOutlined />}
          className=''
        />
      </div>


      <div className=" col-lg-6 col-md-8 col-sm-10 col-xs-12 align-self-center">
        <Card title="USER NAME - LASTNAME">
          <Form
            name="basic"
            initialValues={{ remember: true }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
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
              <Input />
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
          </Form>
        </Card>
      </div>
    </div>
  )
}

export default UserProfile;