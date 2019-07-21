import { AppPage } from './app.po';

describe('employees data', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display "home" title in nav bar', () => {
    page.navigateTo();
    expect(page.getHomeTxt()).toEqual("Home");
  });

  it('should display "employees" title in nav bar', () => {
    page.navigateTo();
    expect(page.getEmployeesTxt()).toEqual("Employees");
  });

  it('should display "Welcome all!" title', () => {
    page.navigateTo();
    expect(page.getTitleWelcome()).toEqual('Welcome all!');
  });

  it('should display a carosel element', () => {
    page.navigateTo();
    expect(page.shownCarosel()).toBeTruthy();
  });

  it('should display a header element', () => {
    page.navigateTo();
    expect(page.shownHeader()).toBeTruthy();
  });

  it('should display a footer element', () => {
    page.navigateTo();
    expect(page.shownFooter()).toBeTruthy();
  });
});
