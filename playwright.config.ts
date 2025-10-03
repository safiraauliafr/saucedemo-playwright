import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  use: {
    browserName: 'chromium',
    headless: process.env.CI ? true : false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    channel: 'chrome',
  },
  workers: process.env.CI ? 2 : undefined,
  projects: [
    {
      name: 'Google Chrome',
      use: { channel: 'chrome' },
    },
  ],
  reporter: [
    ['list'], // console output
    ['html', { outputFolder: 'playwright-report', open: 'always' }], // HTML report
    ['json', { outputFile: 'playwright-report/report.json' }], // JSON report
    ['junit', { outputFile: 'test-results/junit/results.xml' }] 
  ],
});
