import { expect, Locator, Page } from "@playwright/test"
import { LoginPage } from './login-page';

export class RegistrationPage {
  readonly page: Page
  readonly emailField: Locator
  readonly passwordField: Locator
  readonly confirmPasswordField: Locator
  readonly registerBtn: Locator
  readonly alertErrorMsg: Locator

   
  constructor(page: Page) {
    this.page = page

    this.emailField = page.locator("input#email")
    this.passwordField = page.locator("input#password")
    this.confirmPasswordField = page.locator("input#password-confirm")
    this.registerBtn = page.locator(`input[value="Register"]`)
    this.alertErrorMsg = page.locator(`.alert-error`)

  }

  //Actions

  async navigate() {
    const loginPage =  new LoginPage(this.page)
    await this.page.goto("/")
    await loginPage.clickRegisterLink()
  }

  async enterEmail(email: string) {
    await this.emailField.type(email)
  }

  async enterPassword(pass: string) {
    await this.passwordField.type(pass)
  }

  async enterConfirmPassword(pass: string) {
    await this.confirmPasswordField.type(pass)
  }

  async clickRegisterBtn() {
    await this.registerBtn.click()
  }

  async submitRegistrationForm(email: string, pass: string, confirmPass: string) {
    await this.enterEmail(email)
    await this.enterPassword(pass)
    await this.enterConfirmPassword(confirmPass)
    await this.clickRegisterBtn()
  }
}
