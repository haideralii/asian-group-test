import { expect, Locator, Page } from "@playwright/test"

export class DashboardPage {
  readonly page: Page
  readonly asianLogo: Locator

  constructor(page: Page) {
    this.page = page

    this.asianLogo = page.locator(`img[alt="Vue logo"]`)
  }

}
