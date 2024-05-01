import { Card, Col, Image, Row, Space, Typography } from 'antd';
import { FC } from 'react';

import image from '../../../../assets/images/Rick-and-Morty2.jpeg';
import { AdditionalInfoModal } from '../AdditionalInfoModal';
import './styles.css';

interface LocationInfoProps {
  name: string;
  type: string;
  dimension: string;
  residents: number[];
}

export const LocationInfo: FC<LocationInfoProps> = ({
  name,
  type,
  dimension,
  residents,
}) => {
  return (
    <Card className="location-card">
      <Row wrap align="middle" gutter={[16, 16]}>
        <Col xs={24} md={5} sm={8}>
          <Image src={image} width="100%" />
        </Col>
        <Col xs={24} md={19} sm={16}>
          <Space direction="vertical">
            <Typography.Title level={4} className="locations-title-info">
              {name}
            </Typography.Title>
            <Typography.Text type="secondary">
              <strong>Type: </strong>
              {type}
            </Typography.Text>
            <Typography.Text type="secondary">
              <strong>Dimension: </strong>
              {dimension}
            </Typography.Text>
          </Space>
        </Col>
      </Row>
      <AdditionalInfoModal
        name={name}
        type={type}
        dimension={dimension}
        residents={residents}
      />
    </Card>
  );
};
