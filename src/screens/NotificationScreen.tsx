import React from 'react';
import { View, Button } from 'react-native';

type Props = {
  navigation: any;
};

export const NotificationScreen = ({ navigation }: Props) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button onPress={() => navigation.goBack()} title="Go back home" />
  </View>
);
