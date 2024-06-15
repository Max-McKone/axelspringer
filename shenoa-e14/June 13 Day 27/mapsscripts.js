document.addEventListener('DOMContentLoaded', () => {
    // Define cityPopulations in the global scope
    window.cityPopulations = new Map();

    cityPopulations.set('New York', 8537673);
    cityPopulations.set('Los Angeles', 3979576);
    cityPopulations.set('Chicago', 2705994);
    cityPopulations.set('Houston', 2325502);
    cityPopulations.set('Phoenix', 1660272);

    const cityData = document.getElementById('cityData');

    cityPopulations.forEach((population, city) => {
        const cityElement = document.createElement('div');
        cityElement.textContent = `${city}: ${population}`;
        cityData.appendChild(cityElement);
    });

    // Attach the addCity function to the button's click event
    document.getElementById('addCityButton').addEventListener('click', addCity);
});

function addCity() {
    const cityInput = document.getElementById('cityInput');
    const populationInput = document.getElementById('populationInput');

    const city = cityInput.value.trim();
    const population = parseInt(populationInput.value.trim());

    if (city && !isNaN(population)) {
        cityPopulations.set(city, population);
        updateCityData();

        cityInput.value = '';
        populationInput.value = '';
    } else {
        alert('Please enter a city and population');
    }
}

function updateCityData() {
    const cityData = document.getElementById('cityData');
    cityData.innerHTML = '';

    cityPopulations.forEach((population, city) => {
        const cityElement = document.createElement('div');
        cityElement.textContent = `${city}: ${population}`;
        cityData.appendChild(cityElement);
    });
}
