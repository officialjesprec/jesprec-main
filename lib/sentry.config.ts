import * as Sentry from "@sentry/react";

/**
 * Initializes Sentry for the frontend application.
 * Only runs in production mode to save quota and avoiding noise during development.
 * 
 * @param siteName - The name of the site (e.g., 'admin', 'main', 'shop', 'dev')
 */
export const initSentry = (siteName: string) => {
    if (import.meta.env.MODE !== 'production') {
        return;
    }

    const dsn = import.meta.env.VITE_SENTRY_DSN_REACT;

    if (!dsn) {
        console.warn(`Sentry DSN missing for ${siteName}. Skipping initialization.`);
        return;
    }

    Sentry.init({
        dsn,
        integrations: [
            Sentry.browserTracingIntegration(),
            Sentry.replayIntegration(),
        ],
        // Performance Monitoring
        tracesSampleRate: 0.1, // Adjusted for free tier (default 1.0 is too high for free tier)
        // Session Replay
        replaysSessionSampleRate: 0.1,
        replaysOnErrorSampleRate: 1.0,

        // Environment and Tags
        environment: "production",
        initialScope: {
            tags: { site: siteName },
        },
    });
};
