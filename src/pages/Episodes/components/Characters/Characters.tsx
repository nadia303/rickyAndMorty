import { Button, Col, Flex, Image, Row, Spin, Typography } from 'antd';
import { FC } from 'react';

import { Character } from '../../../../types';
import { useGetCharactersForEpisode } from '../../hooks/useGetCharactersForEpisode';
import './styles.css';

interface CharactersProps {
  characters: string[];
}

export const Characters: FC<CharactersProps> = ({ characters }) => {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetching } =
    useGetCharactersForEpisode(characters);

  return (
    <Spin tip="Loading" size="small" spinning={isLoading || isFetching}>
      <Flex gap="middle" vertical>
        {data?.map((character: Character) => {
          return (
            <Row key={character.id} align="top">
              <Col span={10}>
                <Image src={character.image} width={150} />
              </Col>
              <Col span={14}>
                <Flex vertical>
                  <Typography.Title level={4} className="character-title">
                    {character.name}
                  </Typography.Title>
                  <Typography.Text className="character-card">
                    <strong>Gender:</strong> {character.gender}
                  </Typography.Text>
                  <Typography.Text className="character-card">
                    <strong>Species:</strong> {character.species}
                  </Typography.Text>
                  <Typography.Text className="character-card">
                    <strong>Status:</strong> {character.status}
                  </Typography.Text>
                </Flex>
              </Col>
            </Row>
          );
        })}
        {hasNextPage && (
          <Button onClick={() => fetchNextPage()} className="custom-button">
            Load more characters
          </Button>
        )}
      </Flex>
    </Spin>
  );
};
