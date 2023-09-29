import { SafeAreaView, StyleSheet, Text, View } from 'react-native';


import SingInScreen from './src/screens/SignInScreen';
import SingUpScreen from './src/screens/SingUpScreen/SingUpScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen'


const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <NewPasswordScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#19B38C',
  },
});

export default App;
