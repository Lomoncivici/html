import axios from 'axios';

const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';

export const getWeatherByCity = async (city) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
};

export const getWeeklyForecast = async (city) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&appid=${API_KEY}&units=metric`);
    return response.data;
};
