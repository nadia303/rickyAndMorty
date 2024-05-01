import { Button, Col, Flex, Image, Row, Spin, Typography } from 'antd';
import { FC } from 'react';

import { Character } from '../../../../types';
import { useFetchCharactersByIds } from '../../hooks/useFetchCharactersByIds';
import './styles.css';
interface ResidentsProps {
  ids: number[];
}

export const Residents: FC<ResidentsProps> = ({ ids }) => {
  const { characters, fetchNextPage, loading, hasMore } =
    useFetchCharactersByIds(ids);

  return (
    <Spin
      tip="Loading"
      size="small"
      spinning={loading}
      className="residents-spin"
    >
      <Flex gap="middle" vertical>
        {characters?.map((character: Character) => {
          return (
            <Row key={character.id} align="middle">
              <Col span={10}>
                <Image src={character.image} width={150} />
              </Col>
              <Col span={14}>
                <Flex vertical>
                  <Typography.Title level={4} className="residents-title">
                    {character.name}
                  </Typography.Title>
                  <Typography.Text className="residents-text">
                    <strong>Gender:</strong> {character.gender}
                  </Typography.Text>
                  <Typography.Text className="residents-text">
                    <strong>Species:</strong> {character.species}
                  </Typography.Text>
                  <Typography.Text className="residents-text">
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
