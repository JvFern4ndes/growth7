// Função que converte de string para number o valor do campo 'Data Máxima de conclusão';
module.exports = function convertStringToDate(dateString) {
  const timestamp = Date.parse(dateString);

  return timestamp;
}