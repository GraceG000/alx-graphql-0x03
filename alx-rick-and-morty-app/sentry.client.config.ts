import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://<your-key>@<your-org>.ingest.sentry.io/<project-id>",
  tracesSampleRate: 1.0,
});