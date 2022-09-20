import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../core/theme';

const Paragraph = () => (
  <View style={styles.container}>
    <Text style={styles.text1}>Si lo sentís,</Text>
    <Text style={styles.text2}>importa</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  text1: {
    fontSize: 26,
    lineHeight: 26,
    color: theme.colors.secondary,
    textAlign: 'center',
    marginBottom: 14,
    marginRight: 5,
  },
  text2: {
    fontSize: 26,
    lineHeight: 26,
    color: theme.colors.black,
    textAlign: 'center',
    marginBottom: 14,
  },
});

export default memo(Paragraph);
