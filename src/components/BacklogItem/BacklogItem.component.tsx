import React from 'react';
import styled from 'styled-components';

export interface BacklogItemProps {
  name: string;
}

const BacklogItemWrapper = styled.div`
  padding: 10px;
  border-radius: 5px;
  background: #fff;
  margin: 1em 0.5em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100px;
  width: 160px;
`;

export const BacklogItem: React.SFC<BacklogItemProps> = ({ name }) => {
  return (
    <BacklogItemWrapper>
      <img
        src='https://external-preview.redd.it/-QnlsWdlKer3oJ3O1aoo3oLi7wqp0gql9hyZSzhIUm0.png?auto=webp&s=7e61078d4b1acf7d538dbac8ac8680be7d4d4840'
        height='60'
        width='50'
        style={{ border: '2px solid #999', borderRadius: 2, marginBottom: 10 }}
      />
      <p
        style={{
          margin: 0,
          fontSize: 13,
          fontWeight: 'bold',
          textAlign: 'center',
          fontFamily: 'lato, arial',
        }}
      >
        {name}
      </p>
    </BacklogItemWrapper>
  );
};
