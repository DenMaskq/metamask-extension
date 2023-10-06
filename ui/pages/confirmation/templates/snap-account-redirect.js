function getValues(pendingApproval, t, actions, _history) {
  const { snapName } = pendingApproval;
  const { url, isBlockedUrl } = pendingApproval.requestData;

  const onSubmitAction =
    isBlockedUrl === false
      ? () => actions.resolvePendingApproval(pendingApproval.id, true)
      : null;

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
    submitText: t('continue'),
    onSubmit: onSubmitAction,
    onCancel: () => actions.resolvePendingApproval(pendingApproval.id, false),
  };
}

const createSnapAccount = {
  getValues,
};

export default createSnapAccount;
