import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const NotificationScreen = () => (
  <View style={styles.container}>
    <Text>Notificaciones</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
