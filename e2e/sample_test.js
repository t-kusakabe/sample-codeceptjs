Feature('YouTube')

Scenario('検索のテスト', async (I) => {
  I.amOnPage('https://www.youtube.com/')
  I.fillField('検索', 'テスト')
  I.click('#search-icon-legacy')
})
