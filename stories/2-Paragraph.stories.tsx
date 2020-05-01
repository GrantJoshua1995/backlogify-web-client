import React from 'react';
import { Paragraph } from '../src/components/Paragraph';

export default {
  title: 'Paragraph',
  component: Paragraph,
};

export const Text = () => {
  return <Paragraph message='Test' />;
};

export const Bold = () => {
  return <Paragraph message='Test' fontWeight='bold' />;
};

export const Italic = () => {
  return <Paragraph message='Test' fontStyle='italic' />;
};
