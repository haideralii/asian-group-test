import { test, expect } from "../fixtures/base"
import { randomNumber } from "../utils/helper-method"
import data from "../data.json"
test.describe("Registration Page Tests", () => {
  test.beforeEach(async ({ registrationPage }) => {
    await registrationPage.navigate()
  })

  test(`Verify user should be able to get Register with valid email and password`, async ({
    registrationPage,
    dashboardPage,
  }) => {
    const randomValue = randomNumber()
    const email = `test${randomValue}@mail.com`
    const pass = "12345678"
    const confirmPass = "12345678"
    await registrationPage.submitRegistrationForm(email, pass, confirmPass)
    await expect(dashboardPage.asianLogo).toBeVisible()
  })

  test(`Verify that error message displays on entering invalid email`, async ({
    registrationPage,
    dashboardPage,
  }) => {
    const email = data.invalidEmail
    const pass = data.eightDigitPass
    const confirmPass = data.eightDigitPass
    await registrationPage.submitRegistrationForm(email, pass, confirmPass)
    await expect(registrationPage.alertErrorMsg).toContainText(data.error.invalidEmail)
    await expect(dashboardPage.asianLogo).not.toBeVisible()
  })

  test(`Verify that error message displays on entering mismatched password and confirm password`, async ({
    registrationPage,
    dashboardPage,
  }) => {
    const email = `email@test.com`
    const pass = "12345678"
    const confirmPass = "abcdefghi"
    await registrationPage.submitRegistrationForm(email, pass, confirmPass)
    await expect(registrationPage.alertErrorMsg).toContainText(data.error.passwordMisMatch)
    await expect(dashboardPage.asianLogo).not.toBeVisible()
  })

  test(`Verify that error message displays on trying to register with email that already exists in the DB`, async ({
    registrationPage,
    dashboardPage,
  }) => {
    const existedEmail = data.myEmail
    const pass = "123"
    const confirmPass = "123"
    await registrationPage.submitRegistrationForm(existedEmail, pass, confirmPass)
    await expect(registrationPage.alertErrorMsg).toContainText(data.error.emailAlreadyExist)
    await expect(dashboardPage.asianLogo).not.toBeVisible()
  })

  test(`Verify that specify email & password error message displays on submitting empty form`, async ({
    registrationPage,
    dashboardPage,
  }) => {
    await registrationPage.clickRegisterBtn()
    await expect(registrationPage.alertErrorMsg).toContainText(data.error.specifyEmail)
    await expect(registrationPage.alertErrorMsg).toContainText(data.error.specifyPassword)
    await expect(dashboardPage.asianLogo).not.toBeVisible()
  })

})
