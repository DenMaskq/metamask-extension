import React from 'react';
import { Box, Text, TextField } from '../../../components/component-library';
import { SnapAccountRedirectProps } from '../snap-account-redirect';
import {
  AlignItems,
  BackgroundColor,
  BorderStyle,
  FlexDirection,
  TextAlign,
  TextVariant,
} from '../../../helpers/constants/design-system';
import { useI18nContext } from '../../../hooks/useI18nContext';
import RedirectUrlIcon from './redirect-url-icon';

const SnapAccountRedirectContent = ({
  url,
  snapName,
}: SnapAccountRedirectProps) => {
  const t = useI18nContext();
  return (
    <Box
      className="snap-account-redirect-content"
      backgroundColor={BackgroundColor.backgroundDefault}
      borderStyle={BorderStyle.none}
      flexDirection={FlexDirection.Column}
      alignItems={AlignItems.center}
      paddingBottom={2}
      paddingTop={2}
    >
      <Text
        data-testid="snap-account-redirect-content-title"
        textAlign={TextAlign.Center}
        variant={TextVariant.headingLg}
      >
        {t('snapAccountRedirectContinueInSiteTitle')}
      </Text>
      <Text
        data-testid="snap-account-redirect-content-description"
        textAlign={TextAlign.Center}
        variant={TextVariant.bodyMd}
      >
        {t('snapAccountRedirectSiteDescription', [snapName])}
      </Text>
      <TextField
        id="snap-account-redirect-url"
        value={url}
        autoComplete={false}
        readOnly
        margin="normal"
        largeLabel
        startAccessory={null}
        endAccessory={<RedirectUrlIcon url={url} />}
      />
    </Box>
  );
};

export default SnapAccountRedirectContent;
