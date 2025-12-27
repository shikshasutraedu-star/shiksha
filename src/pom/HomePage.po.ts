export default class HomePagePO {
  menuButton = 'button:has(svg[role])';
  selectClassButton = 'button:has-text("Select Class & Language")';

  async openMenu(page: any) {
    await page.click(this.menuButton);
  }

  async goToClassSelection(page: any) {
    await page.click(this.selectClassButton);
  }
}
