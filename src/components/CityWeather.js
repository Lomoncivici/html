import React, { useEffect, useState } from 'react';
import { getWeatherByCity } from '../api/weatherApi';
import WeatherCard from './WeatherCard';

const CityWeather = ({ city }) => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const data = await getWeatherByCity(city);
            setWeather(data);
        };
        fetchWeather();
    }, [city]);

    if (!weather) return <div>Loading...</div>;

    return (
        <div className="weather-card">
            <h2>{weather.name}</h2>
            <WeatherCard weather={weather} />
        </div>
    );
};

export default CityWeather;
