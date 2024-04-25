import React, { FC } from 'react';
import { Button, Col, Flex, Image, Row, Spin, Typography } from 'antd';
import { useGetCharactersForEpisode } from '../../hooks/useGetCharactersForEpisode';
import { Character } from '../../../../types/character';

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
            <Row key={character.id}>
              <Col span={10}>
                <Image src={character.image} width={150} />
              </Col>
              <Col span={14}>
                <Flex vertical>
                  <Typography.Title level={5} type="success">
                    {character.name}
                  </Typography.Title>
                  <Typography.Text>
                    <strong>Gender:</strong> {character.gender}
                  </Typography.Text>
                  <Typography.Text>
                    <strong>Species:</strong> {character.species}
                  </Typography.Text>
                  <Typography.Text>
                    <strong>Status:</strong> {character.status}
                  </Typography.Text>
                </Flex>
              </Col>
            </Row>
          );
        })}
        {hasNextPage && (
          <Button onClick={() => fetchNextPage()}>Load more characters</Button>
        )}
      </Flex>
    </Spin>
  );
};
