import { Card, Col, Row, Space, Typography, Image } from 'antd';
import { FC } from 'react';

import { Gender } from '../../../../types';
import { Status } from '../../../../types';

interface CharacterInfoProps {
  name: string;
  species: string;
  status: Status;
  image: string;
  gender: Gender;
}

export const CharacterInfo: FC<CharacterInfoProps> = ({
  name,
  species,
  status,
  image,
  gender,
}) => {
  return (
    <Card style={{ width: '100%' }}>
      <Row wrap align="middle" gutter={[16, 16]}>
        <Col span={4}>
          <Image src={image} width={160} />
        </Col>
        <Col lg={{ span: 20 }}>
          <Space direction="vertical">
            <Typography.Title level={4} style={{ marginTop: '0' }}>
              {name}
            </Typography.Title>
            <Typography.Text type="secondary">
              <strong>Species: </strong>
              {species}
            </Typography.Text>
            <Typography.Text type="secondary">
              <strong>Status: </strong>
              {status}
            </Typography.Text>
            <Typography.Text type="secondary">
              <strong>Gender: </strong>
              {gender}
            </Typography.Text>
          </Space>
        </Col>
      </Row>
    </Card>
  );
};
