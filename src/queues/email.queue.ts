import Bull from 'bull';
import emailProcess from "../processes/email.process";

const emailQueue = new Bull('email', {
  redis: '127.0.0.1:6379'
});

emailQueue.process(emailProcess);

const sendNewEmail = async (email: {
  from: string;
  to: string;
  subject: string;
  html: string;
}) => {
  emailQueue.add({ email }, {
    attempts: 3,
    delay: 1000 * 60 * 5
  });
};

export {
  sendNewEmail
};
