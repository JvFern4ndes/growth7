const jobs = require('./input.js');

function transformTimeStringToNumber(timeString) {
  const timeParts = timeString.split(' ');
  const hours = parseInt(timeParts[0]);
  return hours;
}

function getDayJobs(jobs) {
  const groupedJobs = [[]];

  for (const job of jobs) {
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

  return groupedJobs;
}

console.log(getDayJobs(jobs));
getDayJobs(jobs);
