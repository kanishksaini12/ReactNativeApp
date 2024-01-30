import {StyleSheet, Text, View, FlatList} from 'react-native';

import {partition} from 'lodash';
import GoalItemComponent from './GoalItemComponent';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function GoalListComponent() {
  const goalList = useSelector((state: any) => state.goalList);

  const list = partition(goalList, d => d.isCompleted);

  return (
    <View>
      {list[1].length ? (
        <View style={styles.listContainer}>
          <Text style={styles.title}>To-do</Text>
          <FlatList
            data={list[1]}
            renderItem={({item}) => <GoalItemComponent goal={item} />}
            keyExtractor={item => `${item.id}`}
          />
        </View>
      ) : null}

      {list[0].length ? (
        <View style={styles.listContainer}>
          <Text style={styles.title}>Completed</Text>
          <FlatList
            data={list[0]}
            renderItem={({item}) => <GoalItemComponent goal={item} />}
            keyExtractor={item => `${item.id}`}
          />
        </View>
      ) : null}
    </View>
  );
}

export default GoalListComponent;

const styles = StyleSheet.create({
  title: {
    margin: 8,
  },
  listContainer: {
    margin: 16,
    borderTopWidth: 2,
    borderStyle: 'solid',
  },
});
