import React, { useState } from 'react';
import styled from 'styled-components';
import { Paragraph } from '../Paragraph';

export interface BacklogItemProps {
  name: string;
}

interface BacklogItemWrapperProps {
  focused: boolean;
}

const BacklogItemWrapper = styled.div<BacklogItemWrapperProps>`
  padding: 10px;
  border-radius: 5px;
  background: ${props => (props.focused ? '#f2f2f2' : '#fff')};
  margin: 1em 0.5em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100px;
  max-width: 300px;
  cursor: ${props => (props.focused ? 'pointer' : 'default')};
`;

export const BacklogItem: React.SFC<BacklogItemProps> = ({ name }) => {
  const [focused, setFocused] = useState<boolean>(false);
  return (
    <BacklogItemWrapper
      focused={focused}
      onMouseEnter={() => {
        setFocused(true);
      }}
      onMouseLeave={() => {
        setFocused(false);
      }}
    >
      <img
        src='https://external-preview.redd.it/-QnlsWdlKer3oJ3O1aoo3oLi7wqp0gql9hyZSzhIUm0.png?auto=webp&s=7e61078d4b1acf7d538dbac8ac8680be7d4d4840'
        height='65'
        width='50'
        style={{ border: '2px solid #999', borderRadius: 2, marginBottom: 10 }}
      />
      <Paragraph message={name} textAlign='center' />
    </BacklogItemWrapper>
  );
};
