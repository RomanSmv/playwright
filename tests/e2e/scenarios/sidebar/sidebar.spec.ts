import test, { expect } from "@playwright/test";
import { SidebarPage } from "../../pages/elementsSidebar";

test('Elments Text Box is working', async ({ page }) => {

    await page.pause()
    await page.goto('/');
   
    await page.click('h5:text("Elements")')

    const sidebarPage = new SidebarPage(page)

    await sidebarPage.clickOnMenuItem('Elements')
    await sidebarPage.clickOnMenuItem('Elements')


    await page.locator('Text Box')
  

  
    // const urlLink = 'https://sun9-31.userapi.com/impf/3KDHLrHaWaKR8OzUBUTr5le066FDI3TbQCWOmA/-1ATzzBYbxs.jpg?size=1590x400&quality=95&crop=0,0,1590,400&sign=23f5194c033e03837ba86ad920678d53&type=cover_group'
  
    // await expect(img).toHaveAttribute('src', urlLink)
  });
