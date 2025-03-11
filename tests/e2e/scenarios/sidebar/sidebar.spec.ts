import test, { expect } from "@playwright/test";
import { SidebarPage } from "../../pages/elementsSidebar";

test('Elments Text Box is working', async ({ page }) => {

    await page.pause()
    await page.goto('/');
   
    await page.click('h5:text("Elements")')

    const sidebarPage = new SidebarPage(page)

    // await sidebarPage.clickOnMenuItem('Elements')

    await sidebarPage.clickOnSubMenuItem('item-0', 'Text Box')

        //check forms is visible
        await expect(page.locator('input[placeholder="Full Name"]')).toBeVisible();
        await expect(page.locator('input[placeholder="name@example.com"]')).toBeVisible();
        await expect(page.locator('textarea[placeholder="Current Address"]')).toBeVisible();
        await expect(page.locator('#permanentAddress')).toBeVisible(); 
        await expect(page.locator('text=Submit')).toBeVisible();

        // check form completion
        await page.fill('input[placeholder="Full Name"]', 'John Doe');
        await page.fill('input[placeholder="name@example.com"]', 'john.doe@example.com');
        await page.fill('textarea[placeholder="Current Address"]', '123 Main St');
        await page.fill('#permanentAddress', '456 Secondary St');

        // check form on submit
        await page.locator('text=Submit').click()

        await page.waitForSelector('#output')
        
        const outputForm = await page.locator('#output');
        await expect(outputForm.locator('#name')).toContainText('John Doe');
  });
