import { Empty, Flex, Pagination, Space, Spin, Tag, Typography } from 'antd';
import { useState } from 'react';
import { useGetAllCharacters } from './hooks/useGetAllCharacters';
import { CharacterInfo } from './components/CharacterInfo';
import { Character } from '../../types/character';
import Search from 'antd/es/input/Search';
import { CharacterFilters } from './components/CharacterFilters';
import { Gender } from '../../types/gender';
import { Status } from '../../types/status';

export const Characters = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGender, setSelectedGender] = useState<Gender | undefined>();
  const [selectedStatus, setSelectedStatus] = useState<Status | undefined>();
  const [page, setPage] = useState(1);

  const { data, total, isLoading, isFetching } = useGetAllCharacters({
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
      <Typography.Title
        level={2}
        style={{
          marginBottom: '40px',
          borderLeft: '5px solid rgb(245, 197, 24)',
          height: '100%',
          paddingLeft: 8,
        }}
      >
        Characters ({total})
      </Typography.Title>

      <Spin tip="Loading" size="small" spinning={isLoading || isFetching}>
        <Flex
          gap={4}
          wrap="wrap"
          align="center"
          justify="space-between"
          style={{ marginBottom: '26px' }}
        >
          <Search
            style={{ width: '400px', color: 'white' }}
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
        <Flex
          align="center"
          gap="middle"
          wrap="wrap"
          style={{ marginBottom: '26px' }}
        >
          {selectedGender && (
            <Tag closable onClose={handleCloseTagGender}>
              {selectedGender}
            </Tag>
          )}
          {selectedStatus && (
            <Tag closable onClose={handleCloseTagStatus}>
              {selectedStatus}
            </Tag>
          )}
        </Flex>
        <Space
          direction="vertical"
          size={16}
          style={{ width: '100%', marginBottom: '30px' }}
        >
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
          key="pagination"
        />
      )}
    </>
  );
};
