import { FoosballPage } from './app.po';

describe('foosball App', function() {
  let page: FoosballPage;

  beforeEach(() => {
    page = new FoosballPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
