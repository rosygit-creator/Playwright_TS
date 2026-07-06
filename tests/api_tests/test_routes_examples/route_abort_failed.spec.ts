// You need to ensure your application doesn't crash when a user loses internet connection. 
// Aborting critical API endpoints allows you to test your 
// app's "Offline Mode" or custom disconnect banners.

//@@@@@@@@@@@@@@ route.abort('failed'); @@@@@@@@@@@@@@

import { test, expect } from '@playwright/test';

test('Intercept the sync API and fail it to simulate losing connection', async ({ request, page }) => {

  // GET request first
  const response = await request.get('https://reqres.in/api/users', {
    headers: {
      'X-API-Key': 'reqres_1758465aee6743278e83aeb428580577'
    }
  });
  
  expect(response.status()).toBe(200);
  

  // Intercept the sync API and fail it to simulate losing connection - 
  // this is not right because intercept/abort work on browser requests only
  // await page.route('https://reqres.in/api/users', route => {
  // route.abort('failed'); // Simulates a general network failure

// });

// one has to be on a browser page to  intercept browser request
await page.goto('about:blank'); // Navigate to a blank page to ensure the page is ready for interception

// Intercept the sync API and fail it to simulate losing connection
await page.route('**/api/users', route => {
  route.abort('failed');
});

const result = await page.evaluate(async () => {
  try {
    await fetch('https://reqres.in/api/users');
    return 'success';
  } catch {
    return 'failed';
  }
});

console.log('@@@@result:', result);
expect(result).toBe('failed');

});

// SCENARIO 2

test('Should show an offline message when network fails', async ({ page }) => {
  // 1. Abort the data-loading request to simulate internet loss
  await page.route('**/api/dashboard-data', route => route.abort('failed'));

  // 2. Navigate to the dashboard page
  await page.goto('/dashboard');

  // 3. Verify the frontend UI catches the error and displays the correct message
  const errorBanner = page.locator('.network-error-message');
  await expect(errorBanner).toBeVisible();
  await expect(errorBanner).toHaveText('Connection failed. Please check your internet.');
});
