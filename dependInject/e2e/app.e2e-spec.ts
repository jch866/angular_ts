import { DependInjectPage } from './app.po';

describe('depend-inject App', function() {
  let page: DependInjectPage;

  beforeEach(() => {
    page = new DependInjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
