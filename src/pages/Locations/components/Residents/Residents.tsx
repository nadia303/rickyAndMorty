import { FC } from 'react';
import { Button, Col, Flex, Image, Row, Spin, Typography } from 'antd';

import { Character } from '../../../../types';
import { useFetchCharactersByIds } from '../../hooks/useFetchCharactersByIds';

interface ResidentsProps {
  ids: number[];
}

export const Residents: FC<ResidentsProps> = ({ ids }) => {
  const { characters, fetchNextPage, loading, hasMore } =
    useFetchCharactersByIds(ids);

  return (
    <Spin tip="Loading" size="small" spinning={loading}>
      <Flex gap="middle" vertical>
        {characters?.map((character: Character) => {
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
        {hasMore && (
          <Button onClick={() => fetchNextPage()} className="custom-button">
            Load more characters
          </Button>
        )}
      </Flex>
    </Spin>
  );
};
