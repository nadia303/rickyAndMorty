import { FC, useState } from 'react';
import { Col, Divider, Flex, Modal, Row, Space, Typography } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
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

  const handleOk = () => {
    setIsModalOpen(false);
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
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Flex vertical>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <img
                src={image}
                alt="Ricky&Morty"
                style={{ width: 150, height: '100%', objectFit: 'cover' }}
              />
            </Col>
            <Col span={16}>
              <Space direction="vertical">
                <Typography.Title level={4} type="warning">
                  {name}
                </Typography.Title>
                <Typography.Title level={5}>{episode}</Typography.Title>
                <Typography.Text type="secondary">{date}</Typography.Text>
              </Space>
            </Col>
          </Row>

          {characters.length > 0 && (
            <>
              <Divider plain={false} />
              <Typography.Title level={4} style={{ marginTop: 0 }}>
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
