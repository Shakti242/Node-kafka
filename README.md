# Kafka Consumer and Admin Setup

This project demonstrates a basic Kafka setup using `kafkajs` for managing and consuming messages from a Kafka topic called `rider-updates`. It includes both Kafka admin and consumer configurations.

## Overview

The project consists of two main components:

### 1. **Admin** (`admin.js`)
- This script is responsible for creating and managing Kafka topics.
- It connects to the Kafka broker and creates a topic named `rider-updates` with two partitions.

### 2. **Consumer** (`consumer.js`)
- This script connects to Kafka as a consumer, subscribes to the `rider-updates` topic, and listens for new messages.
- Upon consuming a message, it logs the details, including the topic, partition, key, and value.

## Features

- **Kafka Topic Management**: 
  - The admin script manages Kafka topics, like creating new topics.
  
- **Message Consumption**: 
  - The consumer script listens to messages from the `rider-updates` topic and processes them.
  
- **Error Handling**: 
  - The consumer script handles errors gracefully and ensures clean disconnections on errors or interruptions.

## Prerequisites

- **Kafka**: Ensure Kafka is running on the broker specified (`10.0.0.27:9092` in this case).
- **Node.js**: Ensure Node.js is installed on your system to run the scripts.
- **KafkaJS**: This project uses KafkaJS for Kafka client connections. Install dependencies using npm.
