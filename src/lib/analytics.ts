"use client";

// Track custom events for Plausible and GA4
export function trackEvent(
  name: string,
  props?: Record<string, string>
) {
  // Plausible
  if (typeof window !== "undefined" && (window as any).plausible) {
    (window as any).plausible(name, { props });
  }

  // GA4
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", name, props);
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
