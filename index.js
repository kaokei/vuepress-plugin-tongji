const { path } = require("path");

module.exports = (options = {}, context) => ({
  define() {
    const { siteConfig = {} } = context;

    const ga = options.ga || siteConfig.ga;
    const GA_ID = ga || false;

    const gtag = options.gtag || siteConfig.gtag;
    const GTAG_ID = gtag || false;

    const hm = options.hm || siteConfig.hm;
    const HM_ID = hm || false;

    const cnzz = options.cnzz || siteConfig.cnzz;
    const CNZZ_ID = cnzz || false;

    const cnzz_web = options.cnzz_web || siteConfig.cnzz_web;
    const CNZZ_WEB_ID = cnzz_web || false;

    return { GA_ID, GTAG_ID, HM_ID, CNZZ_ID, CNZZ_WEB_ID };
  },

  enhanceAppFiles: path.resolve(__dirname, "enhanceAppFile.js"),
});
