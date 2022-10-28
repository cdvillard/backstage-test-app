const { buildModuleFederationConfig } = require('@glcp/mfe-utils');

const { APP, ENTRY } = process.env;

module.exports = buildModuleFederationConfig(APP, ENTRY);
