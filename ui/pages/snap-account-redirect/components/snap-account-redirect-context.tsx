import React from 'react';
import { Text } from '../../../components/component-library';
import { SnapAccountRedirectProps } from '../snap-account-redirect';

const SnapAccountRedirectContent = ({ url }: SnapAccountRedirectProps) => {
  return <Text>{url}</Text>;
};

export default SnapAccountRedirectContent;
