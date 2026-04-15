import { test, expect } from '@playwright/test';
// import expect = require('@playwright/test');

test('Open Netflix and click War Machine movie', async ({ page }) => {
  // Navigate to Netflix
  await page.goto('https://www.netflix.com/');
  
  // Wait for the page to load
  await page.waitForLoadState('networkidle');
  
  // Find and click on War Machine movie icon
  // Note: The movie title text or aria-label may vary based on Netflix's current UI
  await page.locator('text=War Machine').first().click();
  
  // Wait for the movie detail page to load
  await page.waitForLoadState('networkidle');
  const warMachineText = await page.locator("//img[@alt='War Machine']").getAttribute('alt');
  // const v=await warMachine.getAttribute('alt')
  // console.log(warMachine)
  await expect(warMachineText).toBe('Machine')
  
  
  //await page.waitForTimeout(5000);
  
  // Take a screenshot to verify we're on the movie page
  // await page.screenshot({ path: 'war-machine-page.png' });

});