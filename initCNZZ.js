// CNZZ tongji integration
export default (router, cnzz_id, cnzz_web_id) => {
  (function () {
    var cc = document.createElement("script");
    cc.async = 1;
    cc.src =
      "https://s9.cnzz.com/z_stat.php?id=" + cnzz_id + "&web_id=" + cnzz_web_id;
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(cc, s);
  })();

  router.afterEach(function (to) {
    if (typeof _czc != "undefined") {
      const fullPath = router.app.$withBase(to.fullPath);
      if (fullPath) {
        _czc.push(["_trackPageview", fullPath]);
      }
    }
  });
};
