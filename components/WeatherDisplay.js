import React from 'react';
import { Container, CityText, TemperatureText, WeatherDescriptionText, RefreshButton, RefreshButtonText } from './WeatherDisplay.styles';

const WeatherDisplay = ({ weatherData,refreshdata }) => {
  if (!weatherData) {
    return null;
  }

  return (
    <Container>
      <CityText>City: {weatherData.city_name}</CityText>
      <TemperatureText>Temperature: {weatherData.temp} °C</TemperatureText>
      <WeatherDescriptionText>Weather Condition: {weatherData.weather.description}</WeatherDescriptionText>
      <RefreshButton onPress={refreshdata} >
        <RefreshButtonText>Refresh</RefreshButtonText>
      </RefreshButton>
    </Container>
  );
};

export default WeatherDisplay;
