const { kafka } = require('./client');

async function runConsumer() {
    const consumer = kafka.consumer({ groupId: 'User-1' });

    try {
        console.log('Connecting consumer...');
        await consumer.connect();
        console.log('Consumer connected successfully');

        console.log('Subscribing to topic [rider-updates]...');
        await consumer.subscribe({ topic: 'rider-updates', fromBeginning: true });

        console.log('Starting consumer loop...');
        await consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                console.log({
                    topic,
                    partition,
                    key: message.key?.toString(),
                    value: message.value?.toString(),
                });
            },
        });
    } catch (error) {
        console.error('Error in consumer:', error);
    } finally {
        // Cleanly disconnect on errors or interruptions
        process.on('SIGINT', async () => {
            console.log('Disconnecting consumer...');
            await consumer.disconnect();
            console.log('Consumer disconnected');
            process.exit();
        });
    }
}

runConsumer();
