import { Job } from 'bull';

const emailProcess = async (job: Job) => {
  console.log('Processing email job', job.data);
}

export default emailProcess;
