
//@@@@@@@@@@@@@@ route.abort('aborted'); @@@@@@@@@@@@@@


import { test, expect } from '@playwright/test';

test('Practice Speeding Up by Blocking Heavy Assets', async ({ page }) => {
  // 1. Setup the interceptor BEFORE navigating
  await page.route('**/*.{png,jpg,jpeg,gif,css,woff2}', route => {
    const resourceType = route.request().resourceType();
    console.log(`Blocking heavy asset: ${route.request().url()} (${resourceType})`);
    
    // Abort the network connection for these files
    return route.abort('aborted'); 
  });

  // 2. Go to the image-heavy e-commerce sandbox
  await page.goto('https://www.saucedemo.com/');

  // 3. Log in to access the product image dashboard
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Verify the page text loads normally even without the images
  await expect(page.locator('.title')).hasText('Products');
});
