
import { test } from '@playwright/test';



// const authFile = path.join(__dirname, '../playwright/.auth/user.json');

test('skip authenticate', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/inventory.html');
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'All Items' }).click();
});