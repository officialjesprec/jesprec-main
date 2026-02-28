import * as Sentry from "@sentry/react";

/**
 * Initializes Sentry for the frontend application.
 * @param siteName - The name of the site (e.g., 'admin', 'main', 'shop', 'dev')
 */
export const initSentry = (siteName: string) => {
    const isDebug = import.meta.env.VITE_SENTRY_DEBUG === 'true';

    if (import.meta.env.MODE !== 'production' && !isDebug) {
        return;
    }

    const dsn = import.meta.env.VITE_SENTRY_DSN_REACT;

    if (!dsn) {
        console.warn(`Sentry DSN missing for ${siteName}. Skipping initialization.`);
        return;
    }

    if (isDebug) {
        console.log(`[Sentry] Initializing Sentry for ${siteName} in DEBUG mode...`);
    }

    Sentry.init({
        dsn,
        integrations: [
            Sentry.browserTracingIntegration(),
            Sentry.replayIntegration(),
        ],
        // Performance Monitoring
        tracesSampleRate: 0.1, // Adjusted for free tier
        // Session Replay
        replaysSessionSampleRate: 0.1,
        replaysOnErrorSampleRate: 1.0,

        // Environment and Tags
        environment: import.meta.env.MODE,
        debug: isDebug,
        initialScope: {
            tags: { site: siteName },
        },
    });
};
