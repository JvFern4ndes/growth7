const getDayJobs = require('./index.js');

describe('getDayJobs', () => {
  it('se nenhum job for fornecido para a função, retorna um array vazio', () => {
    expect(getDayJobs()).toEqual([]);
  })
})