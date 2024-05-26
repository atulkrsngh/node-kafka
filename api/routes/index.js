import express from 'express';
import controllers from '../controller/index.js';
import config from '../../config.js';

const router = express.Router();

router.post(`${config.rootPath}sendMessage`, controllers.sendMessageToKafka);

export default router;