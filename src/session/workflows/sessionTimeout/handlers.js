// (C) Copyright 2017-2022 Hewlett Packard Enterprise Development LP

export const getRefreshHandler = () => () => {
  // trigger the redirect back through the hub and make sure the
  // token storage is also cleared
  // FIXME: should we do a signOut here to accomplish this?
  sessionStorage.clear();
  window.location.reload();
};
