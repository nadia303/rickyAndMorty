import { FC, useState } from 'react';
import { Col, Divider, Flex, Modal, Row, Space, Typography } from 'antd';
import { CloseOutlined, InfoCircleOutlined } from '@ant-design/icons';

import image from '../../../../assets/images/rick_and_morty.jpeg';
import { Characters } from '../Charcters';

interface AdditionalInfoModalProps {
  name: string;
  episode: string;
  date: string;
  characters: string[];
}

export const AdditionalInfoModal: FC<AdditionalInfoModalProps> = ({
  name,
  episode,
  date,
  characters,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <InfoCircleOutlined
        style={{
          position: 'absolute',
          top: '50%',
          right: 20,
          fontSize: 24,
          cursor: 'pointer',
          transform: 'translateY(-50%)',
          color: 'rgb(14, 99, 190)',
        }}
        onClick={showModal}
      />
      <Modal
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
        closeIcon={<CloseOutlined style={{ color: 'white' }} />}
        wrapClassName="modal-background"
      >
        <Flex vertical style={{ margin: '30px 0' }}>
          <Row>
            <Col span={10}>
              <img
                src={image}
                alt="Ricky&Morty"
                style={{ width: 150, height: '100%', objectFit: 'cover' }}
              />
            </Col>
            <Col span={14}>
              <Space direction="vertical">
                <Typography.Title
                  level={2}
                  style={{ marginTop: '0', color: 'rgb(87, 153, 239)' }}
                >
                  {name}
                </Typography.Title>
                <Typography.Text type="secondary" style={{ color: 'white' }}>
                  <strong>Episode: </strong>
                  {episode}
                </Typography.Text>
                <Typography.Text type="secondary" style={{ color: 'white' }}>
                  <strong>Date: </strong>
                  {date}
                </Typography.Text>
              </Space>
            </Col>
          </Row>

          {characters.length > 0 && (
            <>
              <Divider plain={false} />
              <Typography.Title
                level={3}
                style={{
                  marginTop: 0,
                  color: 'rgb(245, 197, 24)',
                  marginBottom: '30px',
                }}
              >
                Characters
              </Typography.Title>
              <Characters characters={characters} />
            </>
          )}
        </Flex>
      </Modal>
    </>
  );
};
