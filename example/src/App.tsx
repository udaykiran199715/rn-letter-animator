import { Text, View, StyleSheet } from 'react-native';
import { LetterAnimator } from 'rn-letter-animator';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Result:</Text>
      <View>
        <View
          style={{
            height: 40,
            width: 300,
            marginBottom: 24,
          }}
        >
          <LetterAnimator text="Hello World" />
        </View>

        <View
          style={{
            height: 40,
            width: 300,
            marginBottom: 24,
          }}
        >
          <LetterAnimator text="👋 Hello 😊" />
        </View>

        <View
          style={{
            height: 40,
            width: 300,
            marginBottom: 24,
          }}
        >
          <LetterAnimator text="React Native" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
