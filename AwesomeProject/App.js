import React from 'react';
import { View } from 'react-native';
import FinanceCalculator from './src/components/FinanceCalculator';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <FinanceCalculator />
    </View>
  );
};

export default App;
