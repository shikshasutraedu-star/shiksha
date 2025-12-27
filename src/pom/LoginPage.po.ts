export default class LoginPagePO {
  mobileInput = 'input[type="tel"]';
  passwordInput = 'input[type="password"]';
  loginButton = 'button:has-text("Login")';

  async fillMobile(page: any, mobile: string) {
    await page.fill(this.mobileInput, mobile);
  }

  async fillPassword(page: any, pwd: string) {
    await page.fill(this.passwordInput, pwd);
  }

  async submit(page: any) {
    await page.click(this.loginButton);
  }
}
