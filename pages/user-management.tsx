import { render } from '@testing-library/react';
import { Avatar, List } from 'antd';
import React, { useEffect, useState } from 'react';
import { getUsers } from '../src/api-manager/user';
import { User } from '../src/type/User';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

function UserManagement() {

  const [userList, setUserList] = useState<User[]>()

  const fetchUserList = async () => {
    const userList = await getUsers();
    console.log(userList)
    setUserList(userList)
    return userList
  }


  useEffect(() => {
    fetchUserList()
  }, [])



  return (
    <List
      itemLayout="horizontal"
      dataSource={userList}
      renderItem={user => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={<p>{user.first_name} {user.last_name}</p>}
            description={user.role_name}
          />
        </List.Item>
      )}
    />
  )
}

export default UserManagement;