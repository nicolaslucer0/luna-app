import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Background from '../components/Background';

export const NotificationScreen = () => (
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
  </Background>
);

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
