const messages = [
    "oscar",
    "diego",
    "ana",
    "jesica",
    "laura" 
];

const randomMsg = () => {
    const message = messages[Math.floor(random)* messages.length];
    console.log(message);
}

module.exports = { randomMsg };