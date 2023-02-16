import { test, expect } from "../fixtures/base"
import data from "../data.json"
test.describe("Login Page Tests", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate()
  })

  test(`Verify user should be able to login with valid email and password`, async ({
    loginPage,
    dashboardPage,
  }) => {
    await loginPage.loginToPortal(data.myEmail, data.password)
    await expect(dashboardPage.asianLogo).toBeVisible()
  })

  test(`Verify error message displays on entering invalid email`, async ({
    loginPage,
    dashboardPage,
  }) => {
    await loginPage.loginToPortal(data.invalidEmail, data.password)
    await expect(loginPage.errorMsg).toContainText(data.error.invalidEmailOrPassword)
    await expect(dashboardPage.asianLogo).not.toBeVisible()
  })

})
