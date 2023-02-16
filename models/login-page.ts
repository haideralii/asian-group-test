import { expect, Locator, Page } from "@playwright/test"

export class LoginPage {
  readonly page: Page
  readonly emailField: Locator
  readonly passwordField: Locator
  readonly signinBtn: Locator
  readonly registerPageLink: Locator
  readonly errorMsg: Locator

  constructor(page: Page) {
    this.page = page
    
    this.registerPageLink = page.locator("#kc-registration a")
    this.emailField = page.locator("input#username")
    this.passwordField = page.locator("input#password")
    this.signinBtn = page.locator("input#kc-login")
    this.errorMsg = page.locator(".form-group #input-error")
  }

  //Actions

  async navigate() {
    await this.page.goto("/")
  }

  async enterEmail(email: string) {
    await this.emailField.type(email)
  }

  async enterPassword(pass: string) {
    await this.passwordField.type(pass)
  }

  async clickSiginBtn() {
    await this.signinBtn.click()
  }

  async clickRegisterLink() {
    await this.registerPageLink.click()
  }

  async loginToPortal(email: string, pass: string) {
    await this.enterEmail(email)
    await this.enterPassword(pass)
    await this.clickSiginBtn()
  }
}
