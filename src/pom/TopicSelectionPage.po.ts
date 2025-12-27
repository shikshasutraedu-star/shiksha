export default class TopicSelectionPagePO {
  topicButton = (name: string) => `button:has-text("${name}")`;

  async chooseTopic(page: any, name: string) {
    await page.click(this.topicButton(name));
  }
}
