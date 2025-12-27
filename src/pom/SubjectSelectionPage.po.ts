export default class SubjectSelectionPagePO {
  subjectButton = (name: string) => `button:has-text("${name}")`;

  async chooseSubject(page: any, name: string) {
    await page.click(this.subjectButton(name));
  }
}
