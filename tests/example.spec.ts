// output 

// Blocking heavy asset: https://www.saucedemo.com/static/css/main.8a7d64a1.css (stylesheet)
// Blocking heavy asset: https://www.saucedemo.com/static/media/sauce-backpack-1200x1500.0a0b85a385945026062b.jpg (image)
// Blocking heavy asset: https://www.saucedemo.com/static/media/bike-light-1200x1500.37c843b09a7d77409d63.jpg (image)
// Blocking heavy asset: https://www.saucedemo.com/static/media/bolt-shirt-1200x1500.c2599ac5f0a35ed5931e.jpg (image)
// Blocking heavy asset: https://www.saucedemo.com/static/media/sauce-pullover-1200x1500.51d7ffaf301e698772c8.jpg (image)
// Blocking heavy asset: https://www.saucedemo.com/static/media/red-onesie-1200x1500.2ec615b271ef4c3bc430.jpg (image)
// Blocking heavy asset: https://www.saucedemo.com/static/media/red-tatt-1200x1500.30dadef477804e54fc7b.jpg (image)

import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
