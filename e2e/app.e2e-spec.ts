import { Angular2RetailappPage } from './app.po';

describe('angular2-retailapp App', function() {
  let page: Angular2RetailappPage;

  beforeEach(() => {
    page = new Angular2RetailappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
