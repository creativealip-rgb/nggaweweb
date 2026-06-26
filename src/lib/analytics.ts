"use client";

declare global {
  interface Window {
    plausible?: (name: string, options?: { props?: Record<string, string> }) => void;
    gtag?: (command: "event", name: string, props?: Record<string, string>) => void;
  }
}

// Track custom events for Plausible and GA4
export function trackEvent(
  name: string,
  props?: Record<string, string>
) {
  // Plausible
  if (typeof window !== "undefined" && window.plausible) {
    window.plausible(name, { props });
  }

  // GA4
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", name, props);
  }
}

// Predefined events
export const analytics = {
  ctaClick: (label: string, location: string) =>
    trackEvent("CTA Click", { label, location }),

  formSubmit: (formType: string) =>
    trackEvent("Form Submit", { formType }),

  whatsappClick: (location: string) =>
    trackEvent("WhatsApp Click", { location }),

  blogView: (title: string) =>
    trackEvent("Blog View", { title }),

  portfolioView: (name: string) =>
    trackEvent("Portfolio View", { name }),
};
