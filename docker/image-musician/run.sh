read -p 'Instrument:' instrument

docker build -t dai/musician .
docker run dai/musician $instrument