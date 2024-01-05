import Script from 'next/script';

export default function GoogleAnalyticsScript() {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></Script>
      <Script strategy="beforeInteractive">
        {` window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'GA_TRACKING_ID');`}
      </Script>
    </>
  );
}
