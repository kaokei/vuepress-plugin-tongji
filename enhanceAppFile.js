import initBaidu from "./initBaidu";
import initGoogleAnalytics from "./initGoogleAnalytics";
import initGoogleTag from "./initGoogleTag";
import initCNZZ from "./initCNZZ";

export default ({ router }) => {
  if (process.env.NODE_ENV === "production" && typeof window !== "undefined") {
    if (GA_ID) {
      initGoogleAnalytics(router, GA_ID);
    }

    if (GTAG_ID) {
      initGoogleTag(router, GTAG_ID);
    }

    if (HM_ID) {
      initBaidu(router, HM_ID);
    }

    if (CNZZ_ID && CNZZ_WEB_ID) {
      initCNZZ(router, CNZZ_ID, CNZZ_WEB_ID);
    }
  }
};
