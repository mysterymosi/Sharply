import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Loader } from "../components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import posthog from "posthog-js";
function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };
    const handleStop = () => {
      setLoading(false);
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  useEffect(() => {
    const handleRouteChange = () => posthog.capture("$pageview");
    if (!window.location.href.includes("localhost")) {
      // Init PostHog
      posthog.init("phc_EV19U6zkY2rwnNU4qcBKkstbguorKyDZ2liyZjVZKwY", {
        api_host: "https://app.posthog.com",
      });
      // Track page views
      router.events.on("routeChangeComplete", handleRouteChange);
    }

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  if (loading) return <Loader />;
  return (
    <Suspense fallback={<Loader />}>
      <Component {...pageProps} />
    </Suspense>
  );
}

export default MyApp;
