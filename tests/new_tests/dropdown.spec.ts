
import { test, expect } from "@playwright/test";


test.skip('dropdown', async ({ page}) => {
    await page.goto('https://formy-project.herokuapp.com/dropdown');

    await page.getByText('Dropdown button').click()
    const dropd=await page.locator('.dropdown-menu.show').allTextContents()

    for(let i: number=0; i <dropd.length; i++) {
        console.log(dropd[i].replace(/\n/g, '').trim())
    }
});


test.skip('checkbox', async ({page}) => {
    await page.goto('https://formy-project.herokuapp.com/checkbox');
    const checkbox=await page.locator('input[type="checkbox"]').count()
    expect(checkbox).toBe(3)
});

test.skip('alert', async ({page}) => {
    await page.goto('https://formy-project.herokuapp.com/switch-window');
    await page.locator('#alert-button').click();
    await page.waitForTimeout(4000);
    page.on('dialog', async dialog =>{
        dialog.accept();
    })



});

test('page scroll', async ({page})=>{
    await page.goto('https://formy-project.herokuapp.com/scroll');
   const e= await page.locator('#name')
    e.scrollIntoViewIfNeeded();
    e.fill("rosy");
    await page.waitForTimeout(5000);
});


test('new tab', async({page, context})=>{
    await page.goto('https://formy-project.herokuapp.com/switch-window');
    // await page.getByText('Open new tab').click();
    const [newWindow]=Promise.all([
       context.waitForEvent('page'),
        page.getByText('Open new tab').click(),


    ]);
    await newWindow.waitForLoadState();
    await newWindow.title();

});
