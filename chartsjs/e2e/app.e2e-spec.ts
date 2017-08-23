import { ChartsjsPage } from './app.po';

describe('chartsjs App', () => {
  let page: ChartsjsPage;

  beforeEach(() => {
    page = new ChartsjsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
