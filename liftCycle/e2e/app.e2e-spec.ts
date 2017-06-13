import { LiftCyclePage } from './app.po';

describe('lift-cycle App', () => {
  let page: LiftCyclePage;

  beforeEach(() => {
    page = new LiftCyclePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
