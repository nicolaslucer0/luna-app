import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { DrawerContent } from './components/DrawerContent';
import DailyNoteForm from './screens/DailyNoteForm';
import DailyNotes from './screens/DailyNotes';

import { NotificationScreen } from './screens/NotificationScreen';

const Drawer = createDrawerNavigator();

export const Main = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent navigation={props.navigation} />}
    >
      <Drawer.Screen name="Notificaciones" component={NotificationScreen} />
      <Drawer.Screen name="Registro Diario" component={DailyNotes} />
      <Drawer.Screen name="Nuevo Registro Diario" component={DailyNoteForm} />
    </Drawer.Navigator>
  );
};
