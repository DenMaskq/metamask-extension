import React from 'react';
import { Box, Text, TextField } from '../../../components/component-library';
import { SnapAccountRedirectProps } from '../snap-account-redirect';
import {
  AlignItems,
  Display,
  FlexDirection,
  JustifyContent,
  TextAlign,
  TextColor,
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
      display={Display.Flex}
      flexDirection={FlexDirection.Row}
      justifyContent={JustifyContent.spaceBetween}
    >
      <Box
        gap={4}
        display={Display.Flex}
        flexDirection={FlexDirection.Column}
        alignItems={AlignItems.center}
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
          autoFocus={false}
          readOnly
          margin="normal"
          largeLabel
          startAccessory={null}
          endAccessory={<RedirectUrlIcon url={url} />}
          inputProps={{
            color: TextColor.primaryDefault,
          }}
          truncate={false}
        />
      </Box>
    </Box>
  );
};

export default SnapAccountRedirectContent;
