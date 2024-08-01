const { ConfigSource } = require("kafkajs");
const { kafka } = require("./Client")


async function init(){
  const producer = kafka.producer();

  console.log("connecting producer....")
  await producer.connect();
  console.log("producer connected succesfully....")

  await producer.send({
    topic:'realtime-map',
    messages:[
      {
        partition:0,
        key:'location-update',
        value:JSON.stringify({name:'harsh',loc:'pune'})
      }

    ]
  })
  console.log("producer disconnecting...")
  await producer.disconnect();
  
}
init();