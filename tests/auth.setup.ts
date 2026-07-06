
import { test as setup  } from '@playwright/test'; 

// Update the path below to the correct relative path from this file to user_credentials.ts or .js
// import { user_input } from './test_data/user_credentials'; // Update the path as needed

const authFile = 'tests/.auth/user.json';
// const authFile = path.join(__dirname, '../playwright/.auth/user.json');

// autheticate when dotenv is used

setup.skip('authenticate using environment variables', async ({ page }) => {
  
 // Dynamically import based on the environment
  // Perform authentication steps. Replace these actions with your own.
  const selected_env=process.env.ENVIRONMENT || 'staging';
  console.log("Selected Environment:", selected_env);

  console.log("URL:", process.env.URL);
    await page.goto(process.env.URL!);

    await page.getByRole('textbox', { name: 'Username' }).fill(process.env.USER_NAME!)
    await page.getByRole('textbox', { name: 'Password' }).fill(process.env.USER_PASSWORD!)
    await page.locator('#login-button').click();

    await page.locator('div.inventory_container').isVisible()
    // await page.waitForTimeout(10000);
    
  await page.context().storageState({ path: authFile });


});

// authenticate if no dotenv is not used

// setup.skip('authenticate', async ({ page }) => {
//   // Perform authentication steps. Replace these actions with your own.
//     await page.goto('https://www.saucedemo.com/');
//     await page.getByRole('textbox', { name: 'Username' }).fill(user_input.username)
//     await page.getByRole('textbox', { name: 'Password' }).fill(user_input.password)
//     await page.locator('#login-button').click();

//     await page.locator('div.inventory_container').isVisible()
//     // await page.waitForTimeout(10000);
    
//   await page.context().storageState({ path: authFile });
// });