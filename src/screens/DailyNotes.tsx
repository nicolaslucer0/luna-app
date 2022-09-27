import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import React, { memo } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, FAB, Paragraph, Portal, Title } from 'react-native-paper';
import Background from '../components/Background';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const DailyNotes = ({ navigation }: Props) => {
  const isFocused = useIsFocused();

  return (
    <Background>
      <ScrollView style={styles.scroll}>
        <Card style={styles.card}>
          <Card.Title title="asdasd" subtitle="Card Subtitle" />
          <Card.Content>
            <Title>Me pelee con mis padres </Title>
            <Paragraph>Porque no me dejaron salir a bailar</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Title title="Card Title" subtitle="Card Subtitle" />
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Title title="Card Title" subtitle="Card Subtitle" />
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Title title="Card Title" subtitle="Card Subtitle" />
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Title title="Card Title" subtitle="Card Subtitle" />
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
        </Card>
        <Card style={styles.card}>
          <Card.Title title="Card Title" subtitle="Card Subtitle" />
          <Card.Content>
            <Title>Card title</Title>
            <Paragraph>Card content</Paragraph>
          </Card.Content>
        </Card>
      </ScrollView>
      <Portal>
        <FAB
          icon={({ color, size }) => (
            <MaterialCommunityIcons name="plus" color={color} size={size} />
          )}
          visible={isFocused}
          style={styles.button}
          onTouchEnd={() => navigation.navigate('Nuevo Registro Diario')}
        />
      </Portal>
    </Background>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 16,
    bottom: 20,
  },
  card: {
    width: '100%',
    marginBottom: '5%',
  },
  scroll: {
    width: '100%',
  },
});

export default memo(DailyNotes);
