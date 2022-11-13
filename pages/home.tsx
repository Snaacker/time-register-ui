import { useContext } from "react";
import { UserContext } from "./appWrapper";
import { PageHeader, Tabs } from 'antd';

function Home() {

  const { state, update } = useContext(UserContext)
  const items = [
    { label: 'Available', key: 'item-1', children: 'Content 1' },
    { label: 'Absence', key: 'item-2', children: 'Content 2' },
    { label: 'Sick leave', key: 'item-3', children: 'Content 3' },
    { label: 'Holiday', key: 'item-4', children: 'Content 4' },
  ];
  return (
    <div className="row">
      <PageHeader
        className="site-page-header"
        title="Dashboard"
        subTitle="This is a subtitle"
      />
      {/* Hallo {state.user_name} */}
      
      <div className="col-12">
        <Tabs defaultActiveKey="item-1" items={items} />
      </div>

    </div>
  );
}

export default Home;
