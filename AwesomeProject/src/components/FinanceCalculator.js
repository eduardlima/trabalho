import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../styles/styles';

const FinanceCalculator = () => {
  const [principal, setPrincipal] = useState(0);
  const [taxa, settaxa] = useState(0);
  const [tempo, settempo] = useState(0);
  const [result, setResult] = useState(0);

  const calculateFinance = () => {
    if (isNaN(principal) || isNaN(taxa) || isNaN(tempo)) {
      setResult('Por favor, insira valores numéricos válidos');
      return;
    }
    const interest = (principal * taxa * tempo) / 100;
    const total = parseFloat(principal) + interest;
    setResult(total.toFixed(2));
  };


  return (
    <View style={styles.container}>
      <Text style={styles.text} >Calculadora de Financiamento</Text>
      <Text style={styles.ex} >Principal</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        keyboardType="numeric"
        onChangeText={(value) => setPrincipal(value)}
      />
      <Text style={styles.ex} >Taxa de juros (%)</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        keyboardType="numeric"
        onChangeText={(value) => settaxa(value)}
       
      />
      <Text style={styles.ex} >Tempo </Text>
      <TextInput
        style={styles.input}
        placeholder=""
        keyboardType="numeric"
        onChangeText={(value) => settempo(value)}
      />
      <Button style={styles.button} title="Calcular" onPress={calculateFinance} color={'#49877f'} />
      <Text style={styles.result} >Resultado: {result}</Text>
      <Button
  title="Limpar"
  color={'#49877f'} 
  onPress={() => {
    setPrincipal('');
    settaxa('');
    settempo('');
    setResult(0);
    
  }}
  style={styles.button}
/>
    </View>
  );


};


export default FinanceCalculator;
