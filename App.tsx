import {NavigationContainer} from '@react-navigation/native';
import {RootStackNavigator} from './src/navigation/RootStackNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import './src/styles/global.css';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <RootStackNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
