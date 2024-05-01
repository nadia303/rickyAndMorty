import { Flex, Menu, Typography } from 'antd';
import { Header as BasicHeader } from 'antd/es/layout/layout';

import { Link } from 'react-router-dom';

import { navItems } from '../../constants';

export const Header = () => {
  return (
    <BasicHeader
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        height: '82px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'rgb(18, 18, 18)',
      }}
    >
      <Flex style={{ width: '100%', maxWidth: '1280px', margin: '0 auto' }}>
        <Flex
          style={{
            backgroundColor: 'rgb(245, 197, 24)',
            margin: '20px 20px',
            padding: '10px 10px',
            borderRadius: '5px',
          }}
        >
          <Typography style={{ fontWeight: 700 }}>Ricky&Morty</Typography>
        </Flex>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={navItems.map((item) => ({
            key: item.key,
            label: <Link to={item.link}>{item.label}</Link>,
          }))}
          style={{
            flex: 1,
            alignItems: 'center',
            backgroundColor: 'rgb(18, 18, 18)',
          }}
        />
      </Flex>
    </BasicHeader>
  );
};
