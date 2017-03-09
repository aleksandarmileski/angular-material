import { browser, element, by } from 'protractor';

export class AngularMaterialPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('am-root h1')).getText();
  }
}
