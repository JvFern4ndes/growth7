// Função que transforma de string para number o valor do campo 'Tempo estimado';
module.exports = function transformTimeStringToNumber(timeString) {
  const timeParts = timeString.split(' ');
  const hours = parseInt(timeParts[0]);
  return hours;
}