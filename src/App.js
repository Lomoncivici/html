import React, { useState } from 'react';
import CityWeather from './components/CityWeather';
import Search from './components/Search';
import './styles/App.css';

const App = () => {
    const [city, setCity] = useState('London');

    const handleSearch = (city) => {
        setCity(city);
    };

    return (
        <div className="app">
            <h1>Weather App</h1>
            <Search onSearch={handleSearch} />
            <CityWeather city={city} />
            <div className="default-cities">
                <CityWeather city="New York" />
                <CityWeather city="Tokyo" />
                <CityWeather city="Paris" />
                <CityWeather city="Sydney" />
                <CityWeather city="Moscow" />
            </div>
        </div>
    );
};

export default App;
