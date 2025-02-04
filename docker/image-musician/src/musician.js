const mus_protocol = require('./musician-protocol');
const dgram = require('dgram');
const { argv } = require('process')
const { v4: uuid } = require('uuid')

const instrumentSounds = {
    piano: 'ti-ta-ti',
    trumpet: 'pouet',
    flute: 'trulu',
    violin: 'gzi-gzi',
    drum: 'boum-boum'
}

const musician = dgram.createSocket('udp4')


if(argv.length != 3 || !(argv[2] in instrumentSounds)){
    console.log('Error with args');
    process.exit(1);
}

const instrument = process.argv[2];
const sound = instrumentSounds[instrument];
const id = uuid();

// prépare le payload sous format JSON
const payload = JSON.stringify({    
    uuid: id,
    sound
});

// execute la fonction (lambda) suivante toute les 1000 ms (1s)
setInterval( () => {

    // envoie du payload sur le port 8059 et l'IP multicast 231.6.7.9
    musician.send(payload, mus_protocol.PORT, mus_protocol.MULTICAST_ADDRESS, (err) => {
        // callback appelé après que le message à été envoyé
        if(err){
            console.log(err);
        }
        else{
            console.log("Sending payload: " + payload + " via port " + musician.address().port);
        }
    });
}, mus_protocol.INTERVAL);