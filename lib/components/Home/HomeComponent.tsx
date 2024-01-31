import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';

function HomeComponent() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading} variant="displayMedium">
        Welcome
      </Text>
    </View>
  );
}

export default HomeComponent;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    marginBottom: 40,
  },
  button: {
    marginTop: 16,
  },
});
