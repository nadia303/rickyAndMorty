import { Flex, Menu, Typography } from 'antd';
import { Header as BasicHeader } from 'antd/es/layout/layout';
import { Link, useLocation } from 'react-router-dom';

import { navItems } from '../../constants';
import './styles.css';

export const Header = () => {
  const location = useLocation();

  const activeKey =
    navItems.find((item) => item.link === location.pathname)?.key || '1';

  return (
    <BasicHeader className="custom-header">
      <Flex className="header-content">
        <Link to="/" className="brand-link">
          <Flex className="brand">
            <Typography>Ricky&Morty</Typography>
          </Flex>
        </Link>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[activeKey]}
          items={navItems.map((item) => ({
            key: item.key,
            label: <Link to={item.link}>{item.label}</Link>,
          }))}
          className="menu"
        />
      </Flex>
    </BasicHeader>
  );
};
