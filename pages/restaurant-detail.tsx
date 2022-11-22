import { Avatar, Button, Descriptions, Form, Input, message, notification, PageHeader, Popconfirm, Select, Tabs } from 'antd';
import Card from "antd/lib/card/Card";
import React, { useEffect, useState } from 'react';
import { EditOutlined, UserDeleteOutlined } from '@ant-design/icons';
import { useRouter } from "next/router";
import { deleteRestaurant, getRestaurantById } from '../src/api-manager/restaurant';
import { Restaurant } from '../src/type/Restaurant';
import Paragraph from 'antd/lib/typography/Paragraph';


function RestaurantDetail() {
  const { Option } = Select;
  const router = useRouter()
  const { restaurantId } = router.query
  const [restaurant, setRestaurant] = useState<Restaurant>()

  async function fetchRestaurantData() {
    let restaurant = await getRestaurantById(restaurantId)
    setRestaurant(restaurant)
  }

  const openMessage = () => {
    message.success('Restaurant has been deleted successfully ');
  };

  async function callDeleteRestaurant(restaurantId: String) {
    await deleteRestaurant(restaurantId)
    openMessage()
    router.back()
  }

  useEffect(() => {
    console.log(restaurantId)
    fetchRestaurantData()
  }, [restaurantId])

  return (
    <div>
      {restaurant !== undefined ?
        <div className='row justify-content-center'>
          <PageHeader className="site-page-header" title={restaurant.name} onBack={() => router.back()} avatar={{ size: 'large', src: "https://joeschmoe.io/api/v1/random" }}
            extra={[
              <Popconfirm
                placement="bottom"
                title="Are you sure about it ?"
                onConfirm={() => callDeleteRestaurant(restaurantId)}
                okText="Yes"
                cancelText="No"
              >
                <Button key="1" danger icon={<UserDeleteOutlined />} >Delete Restaurant</Button>
              </Popconfirm>,
              <Button key="2" type='primary' icon={<EditOutlined />} onClick={() => router.push({ pathname: "/edit-restaurant", query: { restaurant: JSON.stringify(restaurant) } })}>Edit Restaurant</Button>
            ]}>
            <Descriptions size="middle" column={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}>
              <Descriptions.Item label="Phone Number">{restaurant.phone_number}</Descriptions.Item>
              <Descriptions.Item label="Address">{restaurant.address}</Descriptions.Item>
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

export default RestaurantDetail;
