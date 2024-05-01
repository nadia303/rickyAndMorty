import { Card, Col, Image, Row, Space, Typography } from 'antd';
import { FC } from 'react';

import { AdditionalInfoModal } from '../AdditionalInfoModal';
import image from '../../../../assets/images/rick_and_morty.jpeg';

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
    <Card style={{ width: '100%' }}>
      <Row wrap align="middle" gutter={[16, 16]}>
        <Col span={5}>
          <Image src={image} width={200} />
        </Col>
        <Col span={19}>
          <Space direction="vertical">
            <Typography.Title level={4} style={{ marginTop: '0' }}>
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
