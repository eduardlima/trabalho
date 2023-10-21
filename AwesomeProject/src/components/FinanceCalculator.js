import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../styles/styles';

const FinanceCalculator = () => {
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [result, setResult] = useState(0);

  const calculateFinance = () => {
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
      setResult('Por favor, insira valores numéricos válidos');
      return;
    }
    const interest = (principal * rate * time) / 100;
    const total = parseFloat(principal) + interest;
    setResult(total.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text} >Calculadora de Financiamento</Text>
      <TextInput
        style={styles.input}
        placeholder="Principal"
        keyboardType="numeric"
        onChangeText={(value) => setPrincipal(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Taxa de juros (%)"
        keyboardType="numeric"
        onChangeText={(value) => setRate(value)}
       
      />
      <TextInput
        style={styles.input}
        placeholder="Tempo (em anos)"
        keyboardType="numeric"
        onChangeText={(value) => setTime(value)}
      />
      <Button style={styles.button} title="Calcular" onPress={calculateFinance} color={'#49877f'} />
      <Text style={styles.result} >Resultado: {result}</Text>
      <Button
  title="Limpar"
  color={'#49877f'} 
  onPress={() => {
    setPrincipal('');
    setRate('');
    setTime('');
    setResult(0);
    
  }}
  style={styles.button}
/>
    </View>
  );


};


export default FinanceCalculator;
