function getValues(pendingApproval, t, actions, _history) {
  const { snapName } = pendingApproval;
  const { url } = pendingApproval.requestData;

  return {
    content: [
      {
        element: 'SnapAccountRedirect',
        key: 'snap-account-redirect',
        props: {
          url,
          snapName,
        },
      },
    ],
    cancelText: t('cancel'),
    submitText: t('continue'),
    onSubmit: () => actions.resolvePendingApproval(pendingApproval.id, true),
    onCancel: () => actions.resolvePendingApproval(pendingApproval.id, false),
  };
}

const createSnapAccount = {
  getValues,
};

export default createSnapAccount;
