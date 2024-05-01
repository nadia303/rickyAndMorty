import { CloseOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Col, Divider, Flex, Modal, Row, Space, Typography, Image } from 'antd';
import { FC, useState } from 'react';

import image from '../../../../assets/images/rick_and_morty.jpeg';
import { Characters } from '../Characters';
import './styles.css';

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
      <InfoCircleOutlined className="info-circle-icon" onClick={showModal} />
      <Modal
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
        closeIcon={<CloseOutlined className="modal-close-icon" />}
        wrapClassName="modal-background"
      >
        <Flex vertical className="character-info">
          <Row align="middle">
            <Col span={10}>
              <Image src={image} width={150} />
            </Col>
            <Col span={14}>
              <Space direction="vertical">
                <Typography.Title level={2} className="modal-title">
                  {name}
                </Typography.Title>
                <Typography.Text className="modal-secondary-text">
                  <strong>Episode: </strong>
                  {episode}
                </Typography.Text>
                <Typography.Text className="modal-secondary-text">
                  <strong>Date: </strong>
                  {date}
                </Typography.Text>
              </Space>
            </Col>
          </Row>

          {characters.length > 0 && (
            <>
              <Divider className="character-divider" />
              <Typography.Title level={3} className="character-title">
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
