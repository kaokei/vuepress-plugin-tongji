// Baidu tongji integration
export default (router, id) => {
  window._hmt = window._hmt || [];
  (function () {
    var hm = document.createElement("script");
    hm.async = 1;
    hm.src = "https://hm.baidu.com/hm.js?" + id;
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();

  router.afterEach(function (to) {
    const fullPath = router.app.$withBase(to.fullPath);
    if (fullPath) {
      _hmt.push(["_trackPageview", fullPath]);
    }
  });
};
