import { CloseOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Col, Divider, Flex, Modal, Row, Space, Typography, Image } from 'antd';
import { FC, useState } from 'react';

import image from '../../../../assets/images/rick_and_morty.jpeg';
import { Residents } from '../Residents';
import './styles.css';

interface AdditionalInfoModalProps {
  name: string;
  type: string;
  dimension: string;
  residents: number[];
}

export const AdditionalInfoModal: FC<AdditionalInfoModalProps> = ({
  name,
  type,
  dimension,
  residents,
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
        className="info-circle-icon-locations"
        onClick={showModal}
      />
      <Modal
        visible={isModalOpen}
        footer={null}
        onCancel={handleCancel}
        closeIcon={<CloseOutlined className="modal-close-icon" />}
        wrapClassName="modal-background"
      >
        <Flex vertical className="modal-content">
          <Row>
            <Col span={10}>
              <Image src={image} width={150} />
            </Col>
            <Col span={14}>
              <Space direction="vertical">
                <Typography.Title level={2} className="additional-info-title">
                  {name}
                </Typography.Title>
                <Typography.Text className="secondary-text">
                  <strong>Type: </strong>
                  {type}
                </Typography.Text>
                <Typography.Text className="secondary-text">
                  <strong>Dimension: </strong>
                  {dimension}
                </Typography.Text>
              </Space>
            </Col>
          </Row>

          {residents.length > 0 && (
            <>
              <Divider plain={false} />
              <Typography.Title level={3} className="residents-title">
                Residents
              </Typography.Title>
              <Residents ids={residents} />
            </>
          )}
        </Flex>
      </Modal>
    </>
  );
};
