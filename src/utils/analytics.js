/**
 * Analytics Utility Wrapper for Commite Events
 * Prepared for Google Analytics 4, Google Tag Manager, Meta Pixel, Microsoft Clarity.
 * Environment variables:
 * - import.meta.env.VITE_GA_MEASUREMENT_ID
 * - import.meta.env.VITE_GTM_ID
 * - import.meta.env.VITE_META_PIXEL_ID
 */

export const initAnalytics = () => {
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (gaId && typeof window !== 'undefined') {
    // GA4 Script Injection
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', gaId);
  }
};

export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};
