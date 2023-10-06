function getValues(pendingApproval, t, actions, _history) {
  const { snapName } = pendingApproval;
  const { url, isBlockedUrl } = pendingApproval.requestData;

  const getConditionalProps = () => {
    if (isBlockedUrl === false) {
      return {
        submitText: t('continue'),
        onSubmit: () =>
          actions.resolvePendingApproval(pendingApproval.id, true),
      };
    }
    return {};
  };

  return {
    content: [
      {
        element: 'SnapAccountRedirect',
        key: 'snap-account-redirect',
        props: {
          url,
          snapName,
          isBlockedUrl,
        },
      },
    ],
    cancelText: t('cancel'),
    onCancel: () => actions.resolvePendingApproval(pendingApproval.id, false),
    ...getConditionalProps(),
  };
}

const createSnapAccount = {
  getValues,
};

export default createSnapAccount;
