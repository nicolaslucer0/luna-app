import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { DrawerContent } from './components/DrawerContent';
import DailyNoteForm from './screens/DailyNoteForm';
import { NotificationScreen } from './screens/NotificationScreen';

const Drawer = createDrawerNavigator();

export const Main = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent navigation={props.navigation} />}
    >
      <Drawer.Screen name="Notifications" component={NotificationScreen} />
      <Drawer.Screen name="DailyNotesForm" component={DailyNoteForm} />
    </Drawer.Navigator>
  );
};
