import { Flex, Pagination, Spin, Typography } from 'antd';
import { FC, useState } from 'react';

import { Location } from '../../types';

import { useGetLocations } from './hooks/useGetLocations';
import { LocationInfo } from './components/LocationInfo';

export const Locations: FC = () => {
  const [page, setPage] = useState(1);

  const { data, total, loading } = useGetLocations(page);

  const onChangePage = (value: number) => {
    setPage(value);
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
        Locations ({total})
      </Typography.Title>
      <Spin tip="Loading" size="small" spinning={loading}>
        <Flex
          gap={4}
          wrap="wrap"
          align="center"
          justify="space-between"
          style={{ marginBottom: '26px' }}
        >
          {data?.map((location: Location) => {
            return (
              <LocationInfo
                key={location.id}
                name={location.name}
                type={location.type}
                dimension={location.dimension}
                residents={location.residents.map((el) => el.id)}
              />
            );
          })}
        </Flex>
      </Spin>
      <Pagination
        defaultCurrent={1}
        current={page}
        total={total}
        pageSize={20}
        showSizeChanger={false}
        onChange={onChangePage}
      />
    </>
  );
};
