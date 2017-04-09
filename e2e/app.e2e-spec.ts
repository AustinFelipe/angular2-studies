import { HannahPage } from './app.po';

describe('hannah App', () => {
  let page: HannahPage;

  beforeEach(() => {
    page = new HannahPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
