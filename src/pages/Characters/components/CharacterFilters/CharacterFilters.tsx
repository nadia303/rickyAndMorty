import { CloseOutlined, FilterFilled } from '@ant-design/icons';
import { Button, Flex, Modal, Tag, Typography } from 'antd';
import { Dispatch, FC, SetStateAction, useState } from 'react';

import { Gender, Status } from '../../../../types';
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
      <Button shape="circle" className="filter-button" onClick={showModal}>
        <FilterFilled className="filter-icon" />
      </Button>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        closeIcon={<CloseOutlined className="close-icon" />}
        wrapClassName="modal-background"
      >
        <Flex gap={4} wrap="wrap" vertical className="modal-content">
          <Typography.Title level={5} className="filter-title">
            Gender:
          </Typography.Title>
          <Flex gap={4} wrap="wrap" align="center" className="filter-tags">
            {Object.values(Gender).map((gender) => (
              <Tag
                key={gender}
                onClick={() => handleGenderFilter(gender)}
                className={
                  selectedGender === gender
                    ? 'selected-tag'
                    : 'not-selected-tag'
                }
              >
                {gender}
              </Tag>
            ))}
          </Flex>
          <Typography.Title level={5} className="filter-title">
            Status:
          </Typography.Title>
          <Flex gap={4} wrap="wrap" align="center" className="filter-tags">
            {Object.values(Status).map((status) => (
              <Tag
                key={status}
                onClick={() => handleStatusFilter(status)}
                className={
                  selectedStatus === status
                    ? 'selected-tag'
                    : 'not-selected-tag'
                }
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
