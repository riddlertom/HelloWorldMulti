import { Image, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.discoBall}>🪩</Text>
      <Text style={styles.text}>It works on my android phone Tiffany! YAY</Text>
      <Image
        source={require('../assets/celebration.gif')}
        style={styles.gif}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  discoBall: {
    fontSize: 64,
    marginBottom: 16,
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  gif: {
    width: 200,
    height: 200,
  },
});
