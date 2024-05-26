import config from "../../config.js";
const kafkaConfig = new config.kafkaConfig();

const sendMessageToKafka = async (req, res) => {
  try {
    const { message } = req.body;
    const messages = [{ key: "key1", value: message }];
    kafkaConfig.produce("my-topic", messages);

    res.status(200).json({
      status: "Ok!",
      message: "Message successfully send!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
        status: 'Error',
        message: 'Failed to send message!',
    });
  }
};

const controllers = { sendMessageToKafka };

export default controllers;