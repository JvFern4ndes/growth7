// Importação do módulo que contém o array de jobs;
const jobs = require('./input.js');

// Função que transforma de string para number o valor do campo 'Tempo estimado';
function transformTimeStringToNumber(timeString) {
  const timeParts = timeString.split(' ');
  const hours = parseInt(timeParts[0]);
  return hours;
}

// Função que converte de string para number o valor do campo 'Data Máxima de conclusão';
function convertStringToDate(dateString) {
  const timestamp = Date.parse(dateString);

  return timestamp;
}

// Função principal, atribui este nome pois acredito que se trata da divisão de tarefas que podem ser realizadas durante um dia de trabalho;
function getDayJobs(jobs) {
  const sortedJobs = jobs.sort((a, b) => convertStringToDate(a['Data Máxima de conclusão']) - convertStringToDate(b['Data Máxima de conclusão']));

  const groupedJobs = [[]];

  for (const job of sortedJobs) {
    let addedToGroup = false;
    const jobTime = transformTimeStringToNumber(job['Tempo estimado']);

    for (let i = 0; i < groupedJobs.length; i++) {
      const group = groupedJobs[i];
      const totalTimeGroup = group.reduce((total, j) => total + transformTimeStringToNumber(j['Tempo estimado']), 0);

      if (totalTimeGroup + jobTime <= 8) {
        group.push(job);
        addedToGroup = true;
        break;
      }
    }

    if (!addedToGroup) {
      groupedJobs.push([job]);
    }
  }

  // Retorno da função, que contém os grupos de trabalhos que podem ser realizados durante um tempo estimado de 8 horas;
  return groupedJobs;
}

console.log(getDayJobs(jobs));
