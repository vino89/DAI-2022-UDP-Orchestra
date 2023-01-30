console.log("salut les amis");

// const mus_protocol = require("./auditor-protocol");
// const dgram = require('dgram');
// const day = require('dayjs');
// const net = require('net');


// // auditor udp socket
// const auditor = dgram.createSocket('udp4');
// const udp_port = mus_protocol.PORT;
// const multicast_address = mus_protocol.MULTICAST_ADDRESS;

// const server = net.createServer(onClientConnection);


// const soundsIntstruments = {
//   'ti-ta-ti': 'piano',
//   'pouet': 'trumpet',
//   'trulu': 'flute',
//   'gzi-gzi': 'violin',
//   'boum-boum' : 'drum'
// };


// const orchestra = new Map();


// auditor.bind(udp_port, () => {
//   console.log("Auditor joining Orchestra");
//   auditor.addMembership(multicast_address);
// });

// auditor.on('message', (msg, rinfo) => {

//   const { uuid, sound } = JSON.parse(msg.toString());


//   if(!orchestra.has(uuid)){
//       const instrument = soundsIntstruments[sound];
//       const activeSince = day(); //now ?
      
//       orchestra.set(uuid, {uuid, instrument, activeSince, lastPlay:day()});
//       console.log(orchestra.get(uuid));

//   }
//   else{ 
//       var musician = orchestra.get(uuid);
//       orchestra.set(uuid, {...musician, lastPlay:day()});
//   }
// });


// auditor.on('listening', () => {
//   const address = auditor.address()

//   console.log('Listening to ', 'Address: ', address.address, 'Port: ', address.port)
// })


// function checkActive(){
//   for(let key of orchestra.keys()){
//       var musician = orchestra.get(key);
//       if(day().diff(musician.lastPlay) > mus_protocol.INTERVAL){
//           orchestra.delete(key);
//       }
//   }
// }


// setInterval(checkActive, 500);

// server.listen(mus_protocol.TCP_PORT, () => {
//   console.log('Server started on port '+ mus_protocol.TCP_PORT)
// });

// function onClientConnection(sock){
//   console.log("New connection established");
    
//   payload = [];
//   for (const val of orchestra.values()) {
//       let res = {...val};
//       delete res.lastPlay;
//       payload.push(res);
//   }

//   sock.write(JSON.stringify(payload));
//   sock.end();
// };