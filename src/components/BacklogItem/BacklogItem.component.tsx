import React from 'react';
import styled from 'styled-components';

export interface BacklogItemProps {
  name: string;
}

const BacklogItemWrapper = styled.div`
  margin: 0;
  padding: 5px;
  border-radius: 5px;
  background: #fff;
  margin: 1em 0.5em;
  display: flex;
  justify-content: center;
`;

export const BacklogItem: React.SFC<BacklogItemProps> = ({ name }) => {
  return (
    <BacklogItemWrapper>
      <p>{name}</p>
    </BacklogItemWrapper>
  );
};
