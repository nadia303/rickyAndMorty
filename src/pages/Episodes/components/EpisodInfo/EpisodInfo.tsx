import { Card, Col, Image, Row, Space, Typography } from 'antd';
import { FC } from 'react';
import { AdditionalInfoModal } from '../AdditionalInfoModal';
import image from '../../../../assets/images/rick_and_morty.jpeg';

interface EpisodeInfoProps {
  name: string;
  episode: string;
  date: string;
  characters: string[];
}

export const EpisodeInfo: FC<EpisodeInfoProps> = ({
  name,
  episode,
  date,
  characters,
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
              <strong>Episode: </strong>
              {episode}
            </Typography.Text>
            <Typography.Text type="secondary">
              <strong>Date: </strong>
              {date}
            </Typography.Text>
          </Space>
        </Col>
      </Row>
      <AdditionalInfoModal
        name={name}
        episode={episode}
        date={date}
        characters={characters}
      />
    </Card>
  );
};
