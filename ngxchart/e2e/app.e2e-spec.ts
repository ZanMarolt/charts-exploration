import { NgxchartPage } from './app.po';

describe('ngxchart App', () => {
  let page: NgxchartPage;

  beforeEach(() => {
    page = new NgxchartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
