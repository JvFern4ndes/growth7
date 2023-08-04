// Importação do módulo que contém o array de jobs;
const jobs = require('./input.js');

// Importação das funções auxiliares;
const transformTimeStringToNumber = require('./utils/transformTimeStringToNumber.js');
const convertStringToDate = require('./utils/convertStringToDate.js');

// Função principal, atribui este nome pois acredito que se trata da divisão de tarefas que podem ser realizadas durante um dia de trabalho;
function getDayJobs(jobs) {
  if (!jobs) {
    return [];
  }

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

module.exports = getDayJobs;