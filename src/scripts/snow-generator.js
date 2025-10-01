const SNOW_COUNT = 95; 
const snowContainers = document.querySelectorAll('.snow-area');

function generateSnow(container, count) {
    // Definiciones de funciones de aleatoriedad (mantenemos esto dentro o fuera, da igual, pero por claridad lo dejamos aquí)
    const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const randomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(2);

    for (let i = 0; i < count; i++) {
        const snowFlake = document.createElement('div');
        snowFlake.className = 'snow';
        snowFlake.innerHTML = '&#10052;'; 

        // Generar valores aleatorios
        const duration = randomInt(6, 15) + 's';
        const delay = '-' + randomInt(1, 10) + 's';
        const startX = randomInt(1, 100) + 'vw';
        const leftIni = randomInt(-10, 10) + 'vw';
        const leftEnd = randomInt(-10, 10) + 'vw';

        let size, blur;
        const randomProp = Math.random();
        
        if (randomProp < 0.25) { 
            size = randomFloat(0.2, 0.5) + 'vw';
            blur = randomInt(3, 5) + 'px';
        } else if (randomProp < 0.65) {
            size = randomFloat(0.5, 0.8) + 'vw';
            blur = randomInt(1, 2) + 'px';
        } else { 
            size = randomFloat(0.8, 1.2) + 'vw';
            blur = '0px';
        }

        // Aplicar las variables CSS y propiedades en línea
        snowFlake.style.cssText = `
            --left-ini: ${leftIni};
            --left-end: ${leftEnd};
            
            left: ${startX};
            font-size: ${size};
            filter: blur(${blur});
            
            animation-duration: ${duration};
            animation-delay: ${delay};
        `;

        container.appendChild(snowFlake);
    }
}

// 2. Iterar sobre todos los contenedores y ejecutar la función en cada uno
snowContainers.forEach(container => {
    generateSnow(container, SNOW_COUNT);
});