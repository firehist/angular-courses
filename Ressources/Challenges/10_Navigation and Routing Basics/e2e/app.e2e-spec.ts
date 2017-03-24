import { CliProjectPage } from './app.po';

describe('cli-project App', () => {
  let page: CliProjectPage;

  beforeEach(() => {
    page = new CliProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
