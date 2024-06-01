import React from 'react';
import './Weather.css';

const WeatherCard = ({ weather }) => {
    const weatherCondition = weather.weather[0].main.toLowerCase();

    return (
        <div className={`weather-card ${weatherCondition}`}>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Condition: {weather.weather[0].description}</p>
        </div>
    );
};

export default WeatherCard;
