const { kafka } = require("./Client")




async function init(){
  const consumer = kafka.consumer({groupId:"user-1"})
  await consumer.connect()

  await consumer.subscribe({topics:['realtime-map']})

  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log(
        `${group}: [${topic}]: PART:${partition}:`,
        message.value.toString()
      );
    },
  });
  
}



