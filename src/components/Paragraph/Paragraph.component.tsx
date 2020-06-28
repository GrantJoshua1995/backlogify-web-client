import React from 'react';
import styled from 'styled-components';

export interface ParagraphProps {
  message: string;
  fontWeight?: 'bold' | 'normal';
  fontStyle?: 'italic' | 'normal';
  textAlign?: 'center' | 'left';
}

type StyledParagraphProps = Pick<ParagraphProps, 'fontWeight' | 'fontStyle' | 'textAlign'>;

const StyledParagraph = styled.p<StyledParagraphProps>`
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.fontStyle};
  text-align: ${props => props.textAlign};
  margin: 0;
  font-family: 'Lato', Arial;
`;

export const Paragraph: React.SFC<ParagraphProps> = ({
  message,
  fontWeight = 'normal',
  fontStyle = 'normal',
  textAlign = 'left',
}) => {
  return (
    <StyledParagraph fontWeight={fontWeight} fontStyle={fontStyle} textAlign={textAlign}>
      {message}
    </StyledParagraph>
  );
};
