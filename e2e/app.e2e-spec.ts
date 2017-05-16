import { Angular2017Page } from './app.po';

describe('angular2017 App', () => {
  let page: Angular2017Page;

  beforeEach(() => {
    page = new Angular2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
