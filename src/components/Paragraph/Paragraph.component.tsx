import React from 'react';
import styled from 'styled-components';

export interface ParagraphProps {
  message: string;
  fontWeight?: 'bold' | 'normal';
  fontStyle?: 'italic' | 'normal';
}

type StyledParagraphProps = Pick<ParagraphProps, 'fontWeight' | 'fontStyle'>;

const StyledParagraph = styled.p<StyledParagraphProps>`
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.fontStyle};
  font-family: 'Lato', sans-serif;
`;

export const Paragraph: React.SFC<ParagraphProps> = ({
  message,
  fontWeight = 'normal',
  fontStyle = 'normal',
}) => {
  return (
    <StyledParagraph fontWeight={fontWeight} fontStyle={fontStyle}>
      {message}
    </StyledParagraph>
  );
};
