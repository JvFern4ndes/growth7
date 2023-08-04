const transformTimeStringToNumber = require('./transformTimeStringToNumber');

describe('transformTimeStringToNumber', () => {
  it('converter Tempo estimado de string para Number', () => {
    expect(transformTimeStringToNumber('8 horas')).toBe(8);
  })
})