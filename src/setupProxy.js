const {
  startHostProxy,
  createAppOverrideProxy,
  createProxy,
} = require('@glcp/mfe-utils');

const { APP, PORT } = process.env;

module.exports = async () => {
  /**
   * Only start and inject proxies during `start` script, where `SERVE_HOST` is set true.  
   */
  if (process.env.SERVE_HOST) {
    /**
     * NOTE: Only /api/* and /ui/* proxies can be created as CloudFront cache behaviors
     */
    await startHostProxy([
      createProxy({ name: APP, target: `http://localhost:${PORT}`, type: 'ui' }),

      /**
       * Overrides the manifest.json from integration CloudFront environment.
       * If your app is not deployed to the integration CloudFront environment yet, 
       * this is necessary to run your app locally.
       */ 
      createAppOverrideProxy(
        [{ name: APP, route: `/${APP}` }],
        true), // use manifest.json (for glcs architecture)
    ]);
  }
};
