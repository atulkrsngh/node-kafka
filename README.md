# kafka-nodejs-starter
A simple Express.js API to which sends and receives messages using Apache Kafka.

# Steps to run the application
1. Open cmd at the path of the docker-compose.yml file and run the below command after starting the docker desktop:
   - docker-compose up -d
2. Once, zookeeper, kafka server and kafdrop are running in mode inside docker, open localhost:9000 in the browser and create a topic there with name my-topic
3. Start the node server using command: npm start
4. Hit the below mentioned API from the browser or Postman to publish the message
   - localhost:8000/api/node-kafka/sendMessage
5. As soon as the message is published, it will be consumed by the consumer which can be seen via kafdrop by navigating to the topic: my-topic
