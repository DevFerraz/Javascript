// Fórmulas correspondentes à variação de velocidade

let initialTime;
let finalTime;
let initialPlace;
let finalPlace;
let initialSpeed;
let finalSpeed
let deltaTime = finalTime - initialTime;
let deltaSpace = finalPlace - initialPlace;
let deltaSpeed = finalSpeed - initialSpeed;
let acceleration;
let speed;

function mediumSpeed(initialTime, finalTime, initialPlace, finalPlace) {
    let deltaTime = finalTime - initialTime;
    let deltaSpace = finalPlace - initialPlace;
    console.log(deltaSpace / deltaTime);
}

function instantSpeed(initialSpeed, acceleration, deltaTime) {
    console.log(initialSpeed + acceleration * deltaTime);
}

function torricelli(initialSpeed, acceleration, initialPlace, finalPlace) {
    let deltaSpace = finalPlace - initialPlace;
    console.log(Math.sqrt(initialSpeed * initialSpeed + (2 * acceleration * deltaSpace)));
}

function positionTimer(initialPlace, initialSpeed, time, acceleration) {
    console.log(initialPlace + (initialSpeed * time) + (0.5 * acceleration * time * time));
}

mediumSpeed(0, 2, 0, 120)
torricelli(2, 2, 0, 8)
positionTimer(0, 0, 4, 3)
