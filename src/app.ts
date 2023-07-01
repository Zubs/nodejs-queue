import express from 'express';
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    res.json({
      message: 'Email sent'
    });
});

app.listen(3000, () => {
    console.log('Server started at http://localhost:3000');
});
