import { ChartistPage } from './app.po';

describe('chartist App', () => {
  let page: ChartistPage;

  beforeEach(() => {
    page = new ChartistPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
