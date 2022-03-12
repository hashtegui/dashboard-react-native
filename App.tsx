import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ViewPrincipal from './src/components/viewPrincipal';

export default function App() {
  return (
      <>
      <ViewPrincipal/>
      <StatusBar style='auto'/>
      </>
  );
}