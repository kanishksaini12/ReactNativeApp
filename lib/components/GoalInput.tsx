import {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';
import {useDispatch} from 'react-redux';

function GoalInput(props: any) {
  const [goalText, setGoalText] = useState<string>('');

  const dispatch = useDispatch();

  function addGoalHandler() {
    dispatch({
      type: 'CREATE',
      payload: {
        text: goalText,
      },
    });
  }

  return (
    <View style={styles.input}>
      <TextInput
        style={styles.inputBox}
        label="Goal"
        mode="flat"
        activeUnderlineColor="#fff"
        textColor="#fff"
        onChangeText={text => setGoalText(text)}
      />
      <Button
        mode="contained"
        disabled={goalText.length === 0}
        onPress={addGoalHandler}
        style={styles.addButton}>
        Add Goal
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
    backgroundColor: '#000000',
    borderRadius: 20,
    padding: 16,
  },
  inputBox: {
    width: '65%',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#000',
  },
  addButton: {
    backgroundColor: 'teal',
    justifyContent: 'center',
  },
});

export default GoalInput;
