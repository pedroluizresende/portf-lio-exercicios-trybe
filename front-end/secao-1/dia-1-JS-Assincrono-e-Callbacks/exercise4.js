const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const temperature = getMarsTemperature()

const sendMarsTemperature = (temperature, callback) => {
  console.log(`A temperatura de marte é:${temperature} graus celsius`)
}

setTimeout(() => sendMarsTemperature(temperature, ), messageDelay())