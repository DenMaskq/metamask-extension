import React from 'react';
import {
  BannerAlert,
  BannerAlertSeverity,
  Box,
  Button,
  ButtonSize,
  ButtonVariant,
  Text,
  TextField,
} from '../../../components/component-library';
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
  isBlockedUrl,
}: SnapAccountRedirectProps) => {
  const t = useI18nContext();
  const learnMoreAboutBlockedUrls =
    'https://support.metamask.io/hc/en-us/articles/4428045875483--Deceptive-site-ahead-when-trying-to-connect-to-a-site';
  return (
    <Box
      display={Display.Flex}
      flexDirection={FlexDirection.Row}
      justifyContent={JustifyContent.spaceBetween}
      paddingTop={4}
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
        {isBlockedUrl ? (
          <Box display={Display.Flex} paddingLeft={4} paddingRight={4}>
            <BannerAlert severity={BannerAlertSeverity.Danger}>
              <Text>
                {t('snapUrlIsBlocked', [
                  <Button
                    variant={ButtonVariant.Link}
                    size={ButtonSize.Inherit}
                    onClick={() =>
                      global.platform.openTab({
                        url: learnMoreAboutBlockedUrls,
                      })
                    }
                    key={`snap-url-is-blocked-learn-more-button`}
                  >
                    {t('learnMore')}
                  </Button>,
                ])}
              </Text>
            </BannerAlert>
          </Box>
        ) : null}
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
