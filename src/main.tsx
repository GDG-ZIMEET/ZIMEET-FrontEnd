import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import './styles/GlobalStyles';
import GlobalStyles from './styles/GlobalStyles';
import * as Sentry from '@sentry/react';

const SENTRY_DSN = import.meta.env.VITE_APP_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN,
  sendDefaultPii: false,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration()
  ],
  // Tracing
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost"],
  // Session Replay
  replaysSessionSampleRate: 1.0,
  replaysOnErrorSampleRate: 1.0
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);

export {};
