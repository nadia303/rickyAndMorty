import { Space, Typography } from 'antd';
import { Footer as BasicFooter } from 'antd/es/layout/layout';

import './styles.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <BasicFooter className="custom-footer">
      <Space direction="vertical">
        <Typography.Text type="secondary">
          ©{new Date().getFullYear()} Created by Nadiia Mishchuk
        </Typography.Text>
        <Typography.Text>
          <Link to="mailto:nadyavalya@gmail.com">nadyavalya@gmail.com</Link>
        </Typography.Text>
        <Typography.Text type="secondary">
          <strong>API: </strong>
          <Link to="https://rickandmortyapi.com/documentation/">
            https://rickandmortyapi.com/documentation/
          </Link>
        </Typography.Text>
        <Typography.Text type="secondary">
          <strong>Tech stack: </strong> React, React Query, Apollo GraphQL, Antd
        </Typography.Text>
        <Typography.Text type="secondary">
          <strong>Github repo: </strong>
          <Link to="https://rickandmortyapi.com/documentation/">
            https://github.com/nadia303/rickyAndMorty
          </Link>
        </Typography.Text>
      </Space>
    </BasicFooter>
  );
};
