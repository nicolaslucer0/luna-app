import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SegmentedButtons } from 'react-native-paper';
import Background from '../components/Background';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const DailyNoteForm = ({ navigation }: Props) => {
  const [value, setValue] = React.useState('');

  const _onLoginPressed = () => {
    navigation.navigate('Registro Diario');
  };
  return (
    <Background>
      <ScrollView style={styles.scroll}>
        <TextInput
          label="Situacion"
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="¿Qué paso?"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          label="Motivo"
          placeholder="¿Por qué paso?"
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="emailAddress"
          keyboardType="email-address"
        />

        <TextInput
          label="Emocion automatica"
          placeholder="¿Por qué paso?"
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <Text>¿Con qué intensidad sentiste eso?</Text>
        <SegmentedButtons
          value={value}
          onValueChange={setValue}
          buttons={[
            {
              value: '1',
              label: 'Bajo',
            },
            {
              value: '2',
              label: 'Medio',
            },
            {
              value: '3',
              label: 'Fuerte',
            },
          ]}
        />

        <TextInput
          label="Pensamiento automatico"
          placeholder="¿Por qué paso?"
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <Text>¿Grado de creencia?</Text>
        <SegmentedButtons
          value={value}
          onValueChange={setValue}
          buttons={[
            {
              value: '1',
              label: 'Bajo',
            },
            {
              value: '2',
              label: 'Medio',
            },
            {
              value: '3',
              label: 'Fuerte',
            },
          ]}
        />

        <TextInput
          label="Respuesta racional"
          placeholder="¿Por qué paso?"
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <Text>¿Grado de creencia?</Text>
        <SegmentedButtons
          value={value}
          onValueChange={setValue}
          buttons={[
            {
              value: '1',
              label: 'Bajo',
            },
            {
              value: '2',
              label: 'Medio',
            },
            {
              value: '3',
              label: 'Fuerte',
            },
          ]}
        />

        <TextInput
          label="Al final de todo, que tipo de emocion sentiste?"
          placeholder="¿Por qué paso?"
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <Text>¿Grado de creencia?</Text>
        <SegmentedButtons
          value={value}
          onValueChange={setValue}
          buttons={[
            {
              value: '1',
              label: 'Bajo',
            },
            {
              value: '2',
              label: 'Medio',
            },
            {
              value: '3',
              label: 'Fuerte',
            },
          ]}
        />

        <Button mode="contained" onPress={_onLoginPressed}>
          Guardar registro
        </Button>
      </ScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  scroll: { width: '100%' },
  card: {
    padding: '5%',
    marginBottom: '2%',
    width: '100%',
  },
  column: {
    flexDirection: 'column',
  },
});

export default memo(DailyNoteForm);
