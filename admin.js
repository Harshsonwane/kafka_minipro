//taking admin from client file
const { kafka } = require("./Client");

//making topics
async function init(){
    const admin = kafka.admin();
    console.log("admin connecting....")
    admin.connect();
    console.log("admin connected successfull...")

    console.log("creating topic [realtime-map]..")
    //create topics 
    await admin.createTopics({
        topics:[{
            topic:'realtime-map',
            numPartitions:2,

 
        }]
    }) 
    console.log("topic created successfull...")

    console.log('disconnecting admin')
    await admin.disconnect(); 
}
init();