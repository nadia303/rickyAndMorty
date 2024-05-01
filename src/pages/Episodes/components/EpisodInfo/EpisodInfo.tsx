import { Card, Col, Image, Row, Space, Typography } from 'antd';
import { FC } from 'react';

import image from '../../../../assets/images/rick_and_morty.jpeg';
import { AdditionalInfoModal } from '../AdditionalInfoModal';
import './styles.css';

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
    <Card className="episode-card">
      <Row wrap align="middle" gutter={[16, 16]}>
        <Col span={5}>
          <Image src={image} width={200} />
        </Col>
        <Col span={19}>
          <Space direction="vertical">
            <Typography.Title level={4} className="episode-info">
              {name}
            </Typography.Title>
            <Typography.Text type="secondary" className="episode-info-item">
              <strong>Episode: </strong>
              {episode}
            </Typography.Text>
            <Typography.Text type="secondary" className="episode-info-item">
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
