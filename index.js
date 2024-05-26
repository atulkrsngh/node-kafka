import express from 'express';
import config from './config.js';
import router from './api/routes/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

// consume from topic "test-topic"
const kafkaConfig = new config.kafkaConfig();
kafkaConfig.consume("my-topic", (value) => {
  console.log("Receive message: ", value);
});

app.listen(config.port, (err) => {
    if (err){
        console.log(`Error in running the server: ${err}`);
    } else {
        console.log(`Server is running on port: ${config.port}`);
    }
});