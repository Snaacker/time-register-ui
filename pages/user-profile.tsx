import { Avatar, Button, Descriptions, Form, Input, PageHeader, Select, Tabs } from 'antd';
import Card from "antd/lib/card/Card";
import React, { useEffect, useState } from 'react';
import { EditOutlined, UserDeleteOutlined } from '@ant-design/icons';
import { useRouter } from "next/router";
import { getUserById } from '../src/api-manager/user';
import { User } from '../src/type/User';
import Paragraph from 'antd/lib/typography/Paragraph';


function UserProfile() {
  const { Option } = Select;
  const router = useRouter()
  const { userId } = router.query
  const [user, setUser] = useState<User>()

  async function fetchUserData() {
    let user = await getUserById(userId)
    setUser(user)
  }

  useEffect(() => {
    console.log(userId)
    fetchUserData()
  }, [userId])

  return (
    <div>
      {user !== undefined ?
        <div className='row justify-content-center'>
          <PageHeader className="site-page-header" title={user.first_name + " " + user.last_name} onBack={() => router.back()} avatar={{ size:'large',src: "https://joeschmoe.io/api/v1/random" }} subTitle={user.role_name}
            extra={[
              <Button key="1" danger icon={<UserDeleteOutlined />} onClick={() => router.push("/create-user")}>Delete User</Button>,
              <Button key="2" type='primary' icon={<EditOutlined />} onClick={() => router.push("/create-user")}>Edit User</Button>
            ]}>
            <Paragraph>
              Employees of the month !
            </Paragraph>
            <Descriptions size="middle" column={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}>
              <Descriptions.Item label="Phone Number">{user.phone_number}</Descriptions.Item>
              <Descriptions.Item label="Address">{user.address}</Descriptions.Item>
            </Descriptions>
          </PageHeader>
          <div className=" col-lg-6 col-md-8 col-sm-10 col-xs-12 align-self-center">
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="Tab 1" key="1">
                Content of Tab Pane 1
              </Tabs.TabPane>
              <Tabs.TabPane tab="Tab 2" key="2">
                Content of Tab Pane 2
              </Tabs.TabPane>
              <Tabs.TabPane tab="Tab 3" key="3">
                Content of Tab Pane 3
              </Tabs.TabPane>
            </Tabs>
          </div>
        </div>
        : null}
    </div>

  )
}

export default UserProfile;