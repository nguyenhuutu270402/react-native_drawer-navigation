import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './src/navigations/DrawerNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" translucent={true} />
      <DrawerNavigation />
    </NavigationContainer>
  );
}

