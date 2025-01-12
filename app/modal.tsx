import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, View, Text } from 'react-native'

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Modal</Text> */}

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop:300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    opacity:0.9,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
