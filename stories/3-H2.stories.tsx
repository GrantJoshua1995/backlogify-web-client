import React from 'react';
import { H2 } from '../src/components/H2';

export default {
  title: 'H2',
  component: H2,
};

export const HeaderText = () => {
  return <H2 message='Test' />;
};

export const HeaderBold = () => {
  return <H2 message='Test' fontWeight='bold' />;
};

export const HeaderItalic = () => {
  return <H2 message='Test' fontStyle='italic' />;
};
