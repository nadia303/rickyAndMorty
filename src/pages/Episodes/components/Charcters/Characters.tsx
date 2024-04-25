import { FC } from 'react';
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
            <Row key={character.id} align="top">
              <Col span={10}>
                <Image src={character.image} width={150} />
              </Col>
              <Col span={14}>
                <Flex vertical>
                  <Typography.Title
                    level={4}
                    style={{ color: 'rgb(245, 197, 24)', marginTop: 0 }}
                  >
                    {character.name}
                  </Typography.Title>
                  <Typography.Text style={{ color: 'white' }}>
                    <strong>Gender:</strong> {character.gender}
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
                    <strong>Species:</strong> {character.species}
                  </Typography.Text>
                  <Typography.Text style={{ color: 'white' }}>
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
