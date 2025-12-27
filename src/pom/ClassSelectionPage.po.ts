export default class ClassSelectionPagePO {
  classSelect = 'select';
  languageSelect = 'select:nth-of-type(2)';
  proceedButton = 'button:has-text("Proceed")';

  async selectClass(page: any, value: string) {
    await page.selectOption(this.classSelect, { label: value });
  }

  async selectLanguage(page: any, value: string) {
    await page.selectOption(this.languageSelect, { label: value });
  }

  async proceed(page: any) {
    await page.click(this.proceedButton);
  }
}
