const jobs = require('./input.js');

function getDayJobs(jobs) {
  const groupedJobs = [[]];

  for (const job of jobs) {
    let addedToGroup = false;

    for (let i = 0; i < groupedJobs.length; i++) {
      const group = groupedJobs[i];
      const totalTimeGroup = group.reduce((total, j) => total + j['Tempo estimado'], 0);

      if (totalTimeGroup + job['Tempo estimado'] <= 8) {
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
