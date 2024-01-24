/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {Alert, StyleSheet, View} from 'react-native';

import GoalListComponent from './lib/components/GoalListComponent';
import GoalInput from './lib/components/GoalInput';
import {Text} from 'react-native-paper';
import {Provider} from 'react-redux';
import store from './store';

interface todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

function App(): React.JSX.Element {
  const [goalList, setGoalList] = useState<todo[]>([]);

  function addGoalToList(goal: todo) {
    setGoalList([...goalList, goal]);
  }

  function moveGoal(id: number, mode?: string, text = '') {
    if (mode === 'delete') {
      setGoalList(currGoalList => currGoalList.filter(g => g.id !== id));
      return;
    }

    const g = goalList.find(g => g.id === id);

    if (g) {
      if (mode === 'update') {
        g.text = text;
      } else {
        g.isCompleted = !g?.isCompleted;
      }
    }
  }

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text variant="headlineMedium" style={styles.title}>
          To-do list
        </Text>
        <GoalInput addGoal={addGoalToList} />
        <GoalListComponent data={goalList} moveGoal={moveGoal} />
      </View>
    </Provider>
  );
}

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

export default App;
