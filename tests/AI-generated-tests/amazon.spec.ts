import { test, expect } from '@playwright/test';


const locator='[aria-label="Amazon"]'
test('Open Amazon.com', async ({ page }) => {
  // Navigate to Amazon.com
  await page.goto('https://www.amazon.com');
  
  // Wait for the page to load
  // await page.waitForLoadState('networkidle');
  
  // Take a screenshot as evidence
  await page.screenshot({ path: 'amazon-homepage.png' });
  await page.waitForTimeout(5000);
  
  // Verify page loaded by checking for Amazon logo or search bar
 const success = await page.locator('[aria-label="on"]').isVisible();
expect(success).toBeTruthy();
  
});