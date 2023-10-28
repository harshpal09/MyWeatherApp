import React, { useState } from 'react';
import { Container, Input, SearchButton, SearchButtonText } from './WeatherSearch.styles';
import axios from 'axios';
import WeatherDisplay from './WeatherDisplay';
import { Dimensions, Image, View } from 'react-native';

const { width,height} = Dimensions.get('screen')

const WeatherSearch = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = '9106ccf8a247401990e0a6162f3aef13'; // Replace with your Weatherbit API key

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.weatherbit.io/v2.0/current?key=${apiKey}&include=minutely&city=${city}`);
      setWeatherData(response.data.data[0]);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <Container>
       <View style={{width:"100%",padding:10,marginVertical:20,backgroundColor:'transparent'}}> 
        <Image source={require('../assets/Final-Yesit-Labs-Logo-1.webp')} style={{width:width-60,height:height/7.5}} />
        </View>
      <Input
        placeholder="Enter city name"
        value={city}
        onChangeText={(text) => setCity(text)}
      />
      <SearchButton onPress={handleSearch}>
        <SearchButtonText>Search</SearchButtonText>
      </SearchButton>
      <WeatherDisplay refreshdata={handleSearch}  weatherData={weatherData} />
    </Container>
  );
};

export default WeatherSearch;
