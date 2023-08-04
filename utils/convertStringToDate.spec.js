const convertStringToDate = require('./convertStringToDate');

describe('converter Data Máxima de conclusão de string para Date', () => {
  it('converter uma string para Date', () => {
    expect(convertStringToDate('2023-08-05')).toBe(1691193600000);
  })
})