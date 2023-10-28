import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import WeatherSearch from './components/WeatherSearch';

const App = () => {
  return (
    <SafeAreaView>
      <WeatherSearch />
    </SafeAreaView>
  );
};

export default App;
