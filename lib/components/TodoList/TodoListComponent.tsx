import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import GoalInput from './GoalInput';
import GoalListComponent from './GoalListComponent';
import {useState} from 'react';

function TodoListComponent() {
  const [goalList, setGoalList] = useState<todo[]>([]);

  function addGoalToList(goal: todo) {
    setGoalList([...goalList, goal]);
  }

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        To-do list
      </Text>
      <GoalInput />
      <GoalListComponent />
    </View>
  );
}

export default TodoListComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#191a1b',
    height: '100%',
  },
  title: {
    alignSelf: 'center',
    margin: 16,
    color: '#fff',
  },
  input: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
  },
  inputBox: {
    width: '70%',
    borderStyle: 'solid',
    borderWidth: 2,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
