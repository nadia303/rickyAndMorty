import { Empty, Flex, Pagination, Space, Spin, Tag, Typography } from 'antd';
import Search from 'antd/es/input/Search';
import { useState } from 'react';

import { Gender, Status, Character } from '../../types';

import { CharacterFilters } from './components/CharacterFilters';
import { CharacterInfo } from './components/CharacterInfo';
import { useGetCharacters } from './hooks/useGetCharacters';

import './styles.css';

export const Characters = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGender, setSelectedGender] = useState<Gender | undefined>();
  const [selectedStatus, setSelectedStatus] = useState<Status | undefined>();
  const [page, setPage] = useState(1);

  const { data, total, isLoading, isFetching } = useGetCharacters({
    page,
    searchQuery,
    selectedGender,
    selectedStatus,
  });

  const onChangePage = (value: number) => {
    setPage(value);
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setPage(1);
  };

  const handleCloseTagGender = () => {
    setSelectedGender(undefined);
    setPage(1);
  };

  const handleCloseTagStatus = () => {
    setSelectedStatus(undefined);
    setPage(1);
  };

  return (
    <>
      <Typography.Title level={2} className="characters-main-title">
        Characters ({total})
      </Typography.Title>

      <Spin tip="Loading" size="small" spinning={isLoading || isFetching}>
        <Flex
          gap={4}
          wrap="wrap"
          align="center"
          justify="space-between"
          className="search-filter"
        >
          <Search
            className="search-input"
            placeholder="Search by name..."
            allowClear
            enterButton="Search"
            onSearch={handleSearch}
          />
          <CharacterFilters
            setPage={setPage}
            selectedGender={selectedGender}
            selectedStatus={selectedStatus}
            setSelectedGender={setSelectedGender}
            setSelectedStatus={setSelectedStatus}
          />
        </Flex>
        <Flex align="center" gap="middle" wrap="wrap" className="selected-tags">
          {selectedGender && (
            <Tag
              closable
              onClose={handleCloseTagGender}
              className="character-tag"
            >
              {selectedGender}
            </Tag>
          )}
          {selectedStatus && (
            <Tag
              closable
              onClose={handleCloseTagStatus}
              className="character-tag"
            >
              {selectedStatus}
            </Tag>
          )}
        </Flex>
        <Space direction="vertical" size={16} className="character-info">
          {data?.map((character: Character) => (
            <CharacterInfo
              key={character.id}
              name={character.name}
              species={character.species}
              status={character.status}
              image={character.image}
              gender={character.gender}
            />
          ))}
          {!data && <Empty />}
        </Space>
      </Spin>
      {data && (
        <Pagination
          current={page}
          total={total}
          pageSize={20}
          showSizeChanger={false}
          onChange={onChangePage}
          className="pagination"
        />
      )}
    </>
  );
};
