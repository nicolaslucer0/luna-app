import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import React, { useState } from 'react';
import { Provider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-view';
import { Main } from './src';
import { theme } from './src/core/theme';
import { LoginScreen } from './src/screens';

export const App = () => {
  const [isLogged, setIsLogged] = useState(true);
  return (
    <Provider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          {isLogged ? <Main /> : <LoginScreen setIsLoggedIn={setIsLogged} />}
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};
registerRootComponent(App);
