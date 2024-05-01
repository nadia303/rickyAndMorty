import { FC, useState } from 'react';
import { Col, Divider, Flex, Modal, Row, Space, Typography } from 'antd';
import { CloseOutlined, InfoCircleOutlined } from '@ant-design/icons';

import image from '../../../../assets/images/rick_and_morty.jpeg';
import { Residents } from '../Residents';

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
                  <strong>Type: </strong>
                  {type}
                </Typography.Text>
                <Typography.Text type="secondary" style={{ color: 'white' }}>
                  <strong>Dimension: </strong>
                  {dimension}
                </Typography.Text>
              </Space>
            </Col>
          </Row>

          {residents.length > 0 && (
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
