import React from 'react';
import { Meta } from '@storybook/react';
import SnapAccountRedirect from './snap-account-redirect';

export default {
  title: 'Components/UI/SnapAccountRedirect',
} as Meta<typeof SnapAccountRedirect>;

export const DefaultStory = () => (
  <SnapAccountRedirect
    snapName="Snap Simple Keyring"
    url="https://metamask.github.io/snap-simple-keyring/0.2.4/"
  />
);

DefaultStory.storyName = 'Default';
