// (C) Copyright 2017-2022 Hewlett Packard Enterprise Development LP

export const LOGIN_TIME = 'loginTime';
// 8 hours
export const REFRESH_TOKEN_LIFETIME = 8 * 60 * 60 * 1000;
// 10 minutes
export const REFRESH_PROMPT_BUFFER = 10 * 60 * 1000;
export const TENANTS_STORAGE_KEY = 'tenants';

export const SIGN_OUT_URI = `${document.location.origin}/session/tenant/sign-out`;
