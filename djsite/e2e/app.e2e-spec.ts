import { DjsitePage } from './app.po';

describe('djsite App', () => {
  let page: DjsitePage;

  beforeEach(() => {
    page = new DjsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
