const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
    clientId: "my-app",
    brokers: ["10.0.0.27:9092"],
});

