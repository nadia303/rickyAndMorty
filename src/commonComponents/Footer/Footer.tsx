import { Footer as BasicFooter } from 'antd/es/layout/layout';

export const Footer = () => {
  return (
    <BasicFooter style={{ textAlign: 'center' }}>
      ©{new Date().getFullYear()} Created by Nadiia Mishchuk
    </BasicFooter>
  );
};
