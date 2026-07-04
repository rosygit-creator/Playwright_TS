
import { test, expect } from "@playwright/test";


test('dropdown', async ({ page}) => {
    await page.goto('https://www.juvare.com/');
    

    const e=await page.locator('ul.e-n-menu-heading')
    const e1=await e.locator('span.e-n-menu-title-text').allTextContents()
//    const p= e.locator('li')

    // page.locator('span.elementor-icon-list-text').click()
    
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

test.skip('page scroll', async ({page})=>{
    await page.goto('https://formy-project.herokuapp.com/scroll');
   const e= await page.locator('#name')
    e.scrollIntoViewIfNeeded();
    e.fill("rosy");
    await page.waitForTimeout(5000);
});


test.skip('new tab', async({page, context})=>{
    await page.goto('https://formy-project.herokuapp.com/switch-window');
    // await page.getByText('Open new tab').click();
    const [newWindow]=Promise.all([
       context.waitForEvent('page'),
        page.getByText('Open new tab').click(),


    ]);
    await newWindow.waitForLoadState();
    await newWindow.title();

});
