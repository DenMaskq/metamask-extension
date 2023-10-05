import React from 'react';
import { Box } from '../../components/component-library';
import {
  AlignItems,
  BackgroundColor,
  BlockSize,
  BorderStyle,
  FlexDirection,
} from '../../helpers/constants/design-system';
import { SnapAccountRedirectContent } from './components';

export interface SnapAccountRedirectProps {
  url: string;
  snapName: string;
}

const SnapAccountRedirect = ({ url, snapName }: SnapAccountRedirectProps) => {
  return (
    <Box
      className="create-snap-account-page"
      height={BlockSize.Full}
      width={BlockSize.Full}
      backgroundColor={BackgroundColor.backgroundAlternative}
      borderStyle={BorderStyle.none}
      flexDirection={FlexDirection.Column}
      alignItems={AlignItems.center}
      gap={2}
    >
      <SnapAccountRedirectContent url={url} snapName={snapName} />
    </Box>
  );
};

export default SnapAccountRedirect;
