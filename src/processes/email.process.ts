import { Job } from 'bull';
import nodemailer from 'nodemailer';

const emailProcess = async (job: Job) => {
  console.log('Processing email job', job.data);

  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const { from, to, subject, text } = job.data;

  let info = await transporter.sendMail({
    from,
    to,
    subject,
    text,
    html: `<b>${text}</b>`
  });

  console.log('Message sent: %s', info.messageId);

  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

  return nodemailer.getTestMessageUrl(info);
}

export default emailProcess;
