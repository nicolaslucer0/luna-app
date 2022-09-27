import { useIsFocused } from '@react-navigation/native';
import React, { memo } from 'react';
import { FAB, Portal } from 'react-native-paper';
import Background from '../components/Background';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const DailyNotes = ({ navigation }: Props) => {
  const isFocused = useIsFocused();

  return (
    <Background>
      <Portal>
        <FAB
          icon="abacus"
          visible={isFocused}
          style={{
            position: 'absolute',
            right: 16,
            bottom: 20,
          }}
          onTouchEnd={() => navigation.navigate('Nuevo Registro Diario')}
        />
      </Portal>
    </Background>
  );
};

export default memo(DailyNotes);
