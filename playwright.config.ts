import { defineConfig } from '@playwright/test';

const isCI = !!process.env.CI;

export default defineConfig({
  testDir: './tests',

  timeout: 30 * 1000,

  expect: {
    timeout: 5000,
  },

  use: {
    browserName: 'chromium',

    // 👇 Chrome locally, Chromium in CI
    channel: isCI ? undefined : 'chrome',

    headless: isCI,
    viewport: { width: 1280, height: 720 },

    ignoreHTTPSErrors: true,

    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },

  workers: isCI ? 2 : undefined,

  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: isCI ? 'never' : 'on-failure' }],
    ['json', { outputFile: 'playwright-report/report.json' }],
    ['junit', { outputFile: 'test-results/junit/results.xml' }],
  ],
});
