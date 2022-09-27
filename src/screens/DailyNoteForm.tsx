import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import { Navigation } from '../types';
import { List } from 'react-native-paper';

type Props = {
  navigation: Navigation;
};

const DailyNoteForm = ({ navigation }: Props) => (
  <Background>
    <Logo />
    <Header>Let’s start</Header>
    <List.Item
      title="First Item"
      description="Item description"
      left={(props) => <List.Icon {...props} icon="folder" />}
    />
    <List.Item
      title="First Item"
      description="Item description"
      left={(props) => <List.Icon {...props} icon="folder" />}
    />
    <List.Item
      title="First Item"
      description="Item description"
      left={(props) => <List.Icon {...props} icon="folder" />}
    />
    <List.Item
      title="First Item"
      description="Item description"
      left={(props) => <List.Icon {...props} icon="folder" />}
    />
    <List.Item
      title="First Item"
      description="Item description"
      left={(props) => <List.Icon {...props} icon="folder" />}
    />
    <List.Item
      title="First Item"
      description="Item description"
      left={(props) => <List.Icon {...props} icon="user" />}
    />
    <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
      Logout
    </Button>
  </Background>
);

export default memo(DailyNoteForm);
