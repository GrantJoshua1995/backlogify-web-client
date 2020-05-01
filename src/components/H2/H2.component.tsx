import React from 'react';
import styled from 'styled-components';

export interface H2Props {
  message: string;
  fontWeight?: 'bold' | 'normal';
  fontStyle?: 'italic' | 'normal';
}

type StyledH2Props = Pick<H2Props, 'fontWeight' | 'fontStyle'>;

const StyledH2 = styled.h2<StyledH2Props>`
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.fontStyle};
  font-family: 'Lato', sans-serif;
`;

export const H2: React.SFC<H2Props> = ({
  message,
  fontWeight = 'normal',
  fontStyle = 'normal',
}) => {
  return (
    <StyledH2 fontWeight={fontWeight} fontStyle={fontStyle}>
      {message}
    </StyledH2>
  );
};
