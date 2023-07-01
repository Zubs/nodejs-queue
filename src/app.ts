import express from 'express';
import bodyParser from "body-parser";
import { sendNewEmail } from "./queues/email.queue";

const app = express();

app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    const { from, to, subject, text } = req.body;

    await sendNewEmail({ from, to, subject, text });

    res.json({
      message: 'Email sent'
    });
});

app.listen(3000, () => {
    console.log('Server started at http://localhost:3000');
});
