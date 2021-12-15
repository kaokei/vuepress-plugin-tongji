// Google analytics integration
export default (router, id) => {
  (function (i, s, o, g, r, a, m) {
    i["GoogleAnalyticsObject"] = r;
    i[r] =
      i[r] ||
      function () {
        (i[r].q = i[r].q || []).push(arguments);
      };
    i[r].l = 1 * new Date();
    a = s.createElement(o);
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(
    window,
    document,
    "script",
    "https://www.google-analytics.com/analytics.js",
    "ga"
  );

  ga("create", id, "auto");
  ga("set", "anonymizeIp", true);

  router.afterEach(function (to) {
    const fullPath = router.app.$withBase(to.fullPath);
    if (fullPath) {
      ga("set", "page", fullPath);
      ga("send", "pageview");
    }
  });
};
