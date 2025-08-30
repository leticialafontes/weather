"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Função para buscar coordenadas da cidade
async function getCoordinates(city) {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`;
    const response = await fetch(url);
    if (!response.ok) {
        console.error("Erro ao buscar coordenadas:", response.statusText);
        return null;
    }
    const data = await response.json();
    if (!data.results || data.results.length === 0) {
        console.error("Cidade não encontrada.");
        return null;
    }
    const { latitude, longitude } = data.results[0];
    return { latitude, longitude };
}
// Função para buscar temperatura
async function getWeather(latitude, longitude) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    const response = await fetch(url);
    if (!response.ok) {
        console.error("Erro ao buscar clima:", response.statusText);
        return null;
    }
    const data = await response.json();
    return data.current_weather?.temperature ?? null;
}
// Função principal
async function main() {
    const city = process.argv[2]; // Pega a cidade passada no terminal
    if (!city) {
        console.log("Uso: npm start <cidade>");
        return;
    }
    const coords = await getCoordinates(city);
    if (!coords)
        return;
    const temperature = await getWeather(coords.latitude, coords.longitude);
    if (temperature !== null) {
        console.log(`🌤️ A temperatura atual em ${city} é ${temperature}°C`);
    }
    else {
        console.log("Não foi possível obter a temperatura.");
    }
}
main();
//# sourceMappingURL=index.js.map