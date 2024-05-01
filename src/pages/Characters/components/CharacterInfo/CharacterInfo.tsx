import { Card, Col, Row, Space, Typography, Image } from 'antd';
import { FC } from 'react';

import { Gender, Status } from '../../../../types';

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
    <Card className="character-card">
      <Row wrap align="middle" gutter={[16, 16]} className="character-row">
        <Col xs={24} md={5} sm={8}>
          <Image src={image} width="100%" />
        </Col>
        <Col xs={24} md={19} sm={16}>
          <Space direction="vertical" className="character-info-space">
            <Typography.Title level={4} className="character-name">
              {name}
            </Typography.Title>
            <Typography.Text type="secondary" className="character-details">
              <strong>Species: </strong>
              {species}
            </Typography.Text>
            <Typography.Text type="secondary" className="character-details">
              <strong>Status: </strong>
              {status}
            </Typography.Text>
            <Typography.Text type="secondary" className="character-details">
              <strong>Gender: </strong>
              {gender}
            </Typography.Text>
          </Space>
        </Col>
      </Row>
    </Card>
  );
};
