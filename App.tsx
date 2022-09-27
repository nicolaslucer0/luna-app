import { registerRootComponent } from 'expo';
import React, { useState } from 'react';
import { Provider } from 'react-native-paper';
import { Main } from './src';
import { theme } from './src/core/theme';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from './src/screens';

export const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        {isLogged ? <Main /> : <LoginScreen setIsLoggedIn={setIsLogged} />}
      </NavigationContainer>
    </Provider>
  );
};
registerRootComponent(App);
