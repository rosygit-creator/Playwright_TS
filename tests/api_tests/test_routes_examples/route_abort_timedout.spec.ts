import { test, expect } from '@playwright/test';

test('Simulate a network timeout during login', async ({ page }) => {
  // 1. Intercept the login API request and force a timeout
  await page.route('**/api/login', async route => {
    console.log(`Forcing a timeout on request: ${route.request().url()}`);
    await route.abort('timedout'); // Simulates a slow/unresponsive server drop
  });

  // 2. Navigate to the website
  await page.goto('https://saucedemo.com');

  // 3. Fill out the login form
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  
  // 4. Click login (this triggers the intercepted request)
  await page.click('#login-button');

  // 5. Verify the UI handles the timeout gracefully
  // (e.g., stops the loading spinner or shows an explicit timeout error message)
  const errorMessage = page.locator('[data-test="error"]');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('Request timed out');
});
