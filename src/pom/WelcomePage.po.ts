export default class WelcomePagePO {
  root = 'body';
  loginButton = 'button:has-text("Login")';
  exploreGuestButton = 'button:has-text("Explore as Guest")';

  async goto(page: any) {
    await page.goto('/');
  }

  async clickLogin(page: any) {
    await page.click(this.loginButton);
  }

  async exploreAsGuest(page: any) {
    await page.click(this.exploreGuestButton);
  }
}
