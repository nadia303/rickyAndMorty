import { Flex, Pagination, Space, Spin, Typography } from 'antd';
import { FC, useState } from 'react';
import { useGetAllEpisodes } from './hooks/useGetAllEpisodes';
import { EpisodeInfo } from './components/EpisodInfo';
import { Episode } from '../../types';

interface EpisodesProps {
  name?: string;
}

export const Episodes: FC<EpisodesProps> = () => {
  const [page, setPage] = useState(1);

  const { data, total, isLoading, isFetching } = useGetAllEpisodes(page);

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
        Episodes ({total})
      </Typography.Title>
      <Spin tip="Loading" size="small" spinning={isLoading || isFetching}>
        <Flex
          gap={4}
          wrap="wrap"
          align="center"
          justify="space-between"
          style={{ marginBottom: '26px' }}
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
