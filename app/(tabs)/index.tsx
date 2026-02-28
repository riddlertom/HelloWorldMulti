import { useState } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const DANCING_IMAGES = [
  require('../../assets/dancing/dance3.gif'),
  require('../../assets/dancing/dance4.gif'),
  require('../../assets/dancing/dance11.gif'),
  require('../../assets/dancing/dance_ice1.gif'),
  require('../../assets/dancing/dance_gc1.gif'),
  require('../../assets/dancing/dance_gc2.gif'),
  require('../../assets/dancing/dance_gc3.gif'),
  require('../../assets/dancing/dance_gc4.gif'),
  require('../../assets/dancing/dance_gc5.gif'),
  require('../../assets/dancing/dance_gc6.gif'),
  require('../../assets/dancing/dance_gc7.gif'),
  require('../../assets/dancing/dance_gc8.gif'),
  require('../../assets/dancing/dance_gc9.gif'),
];

export default function HomeScreen() {
  const [imageIndex, setImageIndex] = useState(0);

  const cycleImage = () => {
    setImageIndex((prev) => (prev + 1) % DANCING_IMAGES.length);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.discoBall}>🪩</Text>
      <Text style={styles.text}>It works on my android phone Tiffany! YAY</Text>
      <Image
        source={DANCING_IMAGES[imageIndex]}
        style={styles.gif}
        resizeMode="contain"
      />
      <Pressable style={styles.button} onPress={cycleImage}>
        <Text style={styles.buttonText}>Next Dancing Image</Text>
      </Pressable>
      <Text style={styles.counter}>
        {imageIndex + 1} / {DANCING_IMAGES.length}
      </Text>
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
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#6366f1',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  counter: {
    marginTop: 12,
    fontSize: 14,
    color: '#64748b',
  },
});
