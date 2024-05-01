import { CloseOutlined, FilterFilled } from '@ant-design/icons';
import { Button, Flex, Modal, Tag, Typography } from 'antd';
import { Dispatch, FC, SetStateAction, useState } from 'react';

import { Gender } from '../../../../types';
import { Status } from '../../../../types';
import './styles.css';

interface CharacterFiltersProps {
  selectedGender: Gender | undefined;
  selectedStatus: Status | undefined;
  setPage: Dispatch<SetStateAction<number>>;
  setSelectedGender: Dispatch<SetStateAction<Gender | undefined>>;
  setSelectedStatus: Dispatch<SetStateAction<Status | undefined>>;
}

export const CharacterFilters: FC<CharacterFiltersProps> = ({
  setPage,
  selectedGender,
  selectedStatus,
  setSelectedGender,
  setSelectedStatus,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGenderFilter = (gender: Gender) => {
    setSelectedGender(gender === selectedGender ? undefined : gender);
    setPage(1);
  };

  const handleStatusFilter = (status: Status) => {
    setSelectedStatus(status === selectedStatus ? undefined : status);
    setPage(1);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        shape="circle"
        style={{
          backgroundColor: 'rgb(22, 119, 255)',
          color: 'white',
          fontSize: '16px',
        }}
        icon={<FilterFilled />}
        onClick={showModal}
      />
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        closeIcon={<CloseOutlined style={{ color: 'white' }} />}
        wrapClassName="modal-background"
      >
        <Flex
          gap={4}
          wrap="wrap"
          vertical
          style={{ backgroundColor: 'rgb(31,31,31)' }}
        >
          <Typography.Title
            level={5}
            style={{ marginTop: 0, color: 'rgb(245, 197, 24)' }}
          >
            Gender:
          </Typography.Title>
          <Flex gap={4} wrap="wrap" align="center">
            {Object.values(Gender).map((gender) => (
              <Tag
                key={gender}
                onClick={() => handleGenderFilter(gender)}
                color={
                  selectedGender === gender
                    ? 'rgb(245, 197, 24)'
                    : 'transparent'
                }
                style={{
                  cursor: 'pointer',
                  borderColor: 'white',
                  color: selectedGender === gender ? 'black' : 'white',
                }}
              >
                {gender}
              </Tag>
            ))}
          </Flex>
          <Typography.Title level={5} style={{ color: 'rgb(245, 197, 24)' }}>
            Status:
          </Typography.Title>
          <Flex gap={4} wrap="wrap" align="center">
            {Object.values(Status).map((status) => (
              <Tag
                key={status}
                onClick={() => handleStatusFilter(status)}
                color={
                  selectedStatus === status
                    ? 'rgb(245, 197, 24)'
                    : 'transparent'
                }
                style={{
                  cursor: 'pointer',
                  borderColor: 'white',
                  color: selectedStatus === status ? 'black' : 'white',
                }}
              >
                {status}
              </Tag>
            ))}
          </Flex>
        </Flex>
      </Modal>
    </>
  );
};
