import { useState } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const DANCING_IMAGES = [
  { uri: 'https://media.giphy.com/media/26BROrshLbOGndJQ/giphy.gif' },
  { uri: 'https://media.giphy.com/media/3o7TKsQ8Xb5c7f9B2/giphy.gif' },
  { uri: 'https://media.giphy.com/media/13FrpeVH09Zrb2/giphy.gif' },
  { uri: 'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif' },
  { uri: 'https://media.giphy.com/media/3o7abKhOpu0Nwenp3y/giphy.gif' },
  { uri: 'https://media.giphy.com/media/26u4cqiYb30iuQ6Y/giphy.gif' },
  { uri: 'https://media.giphy.com/media/xT5LMzIK1AdZJ4cKW4/giphy.gif' },
  { uri: 'https://media.giphy.com/media/3o7TKr7lSXqD0d0yG4/giphy.gif' },
  { uri: 'https://media.giphy.com/media/11vhCpFcDqCYsE/giphy.gif' },
  { uri: 'https://media.giphy.com/media/3o7abGQa0aRKWURsC4/giphy.gif' },
  { uri: 'https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif' },
  { uri: 'https://media.giphy.com/media/3o7btT1XePwPDTDGFq/giphy.gif' },
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
