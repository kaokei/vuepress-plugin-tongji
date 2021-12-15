// google tag integration
export default (router, id) => {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }

  gtag("js", new Date());
  gtag("config", id, { anonymize_ip: true });

  (function () {
    var gg = document.createElement("script");
    gg.async = 1;
    gg.src = "https://www.googletagmanager.com/gtag/js?id=" + id;
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(gg, s);
  })();

  router.afterEach(function (to) {
    const fullPath = router.app.$withBase(to.fullPath);
    if (fullPath) {
      gtag("set", "page_path", fullPath);
      gtag("event", "page_view");
    }
  });
};
