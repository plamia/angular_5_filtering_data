import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToEmployees() {
    return browser.get('/employees');
  }

  pageSize() {
    return browser.driver.manage().window().setSize(1600, 1000);
  }

  getHomeTxt() {
    return element(by.css(".container > h6")).getText();
  }

  getEmployeesTxt() {
    let firstLI = element.all(by.css('.open li')).first();
    return firstLI.getText();
  }

  getTitleWelcome() {
    browser.get('/');
    return element(by.css(".welcome-title")).getText();
  }

  shownCarosel() {
    browser.get('/');
    return element(by.css(".carousel")).isDisplayed();
  }

  shownHeader() {
    browser.get('/');
    return element(by.css("#header")).isDisplayed();
  }

  shownFooter() {
    browser.get('/');
    return element(by.css(".footer-holder")).isDisplayed();
  }





}

