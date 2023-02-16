import { test as base } from '@playwright/test';
import { LoginPage } from '../models/login-page';
import { RegistrationPage } from '../models/resgistration-page';
import { DashboardPage } from '../models/dashboard-page';

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  }, 

  registrationPage: async ({ page }, use) => {
    await use(new RegistrationPage(page));
  }, 

  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  }, 

});

export const expect = base.expect;

