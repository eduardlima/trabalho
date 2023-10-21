import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3f509e',
    
  },
  header: {

    marginBottom: 20,
  },
  input: {
    width: 500,
    height: 80,
    borderColor: '#ab90ff',
    borderWidth: 3,
    marginVertical: 7,
    padding: 10,
    borderRadius:40,
    backgroundColor: 'white',
    fontSize: 20,
    color:'blue',
  },
  button: {
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  result: {
    fontSize: 30,
    marginTop: 20,
  },
  
  text: {
   fontSize: 50,
   height: 250,
   color:'#ffffff',
   fontFamily: 'Roboto',
  },
});