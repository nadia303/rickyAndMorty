import { Flex, Pagination, Spin, Typography } from 'antd';
import { FC, useState } from 'react';

import { Episode } from '../../types';

import { EpisodeInfo } from './components/EpisodInfo';
import { useGetAllEpisodes } from './hooks/useGetAllEpisodes';
import './styles.css';

export const Episodes: FC = () => {
  const [page, setPage] = useState(1);
  const { data, total, isLoading, isFetching } = useGetAllEpisodes(page);

  const onChangePage = (value: number) => {
    setPage(value);
  };

  return (
    <>
      <Typography.Title level={2} className="episodes-title">
        Episodes ({total})
      </Typography.Title>
      <Spin tip="Loading" size="small" spinning={isLoading || isFetching}>
        <Flex
          gap={4}
          wrap="wrap"
          align="center"
          justify="space-between"
          className="episode-container"
        >
          {data?.map((episode: Episode) => {
            return (
              <EpisodeInfo
                key={episode.id}
                name={episode.name}
                episode={episode.episode}
                date={episode.air_date}
                characters={episode.characters}
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
