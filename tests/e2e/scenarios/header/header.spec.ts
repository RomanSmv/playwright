import test, { expect } from "@playwright/test";
test('has title', async ({ page }) => {
  await page.pause()

  await page.goto('/');

  const img = await page.locator('img')

  const urlLink = 'https://sun9-31.userapi.com/impf/3KDHLrHaWaKR8OzUBUTr5le066FDI3TbQCWOmA/-1ATzzBYbxs.jpg?size=1590x400&quality=95&crop=0,0,1590,400&sign=23f5194c033e03837ba86ad920678d53&type=cover_group'

  await expect(img).toHaveAttribute('src', urlLink)
});




