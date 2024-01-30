import {useState} from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';

function GoalItemComponent(props: any) {
  const [showModal, setShowModal] = useState(false);

  const [value, setValue] = useState(props.goal.text);

  const dispatch = useDispatch();

  function save() {
    dispatch({
      type: 'UPDATE',
      payload: {
        id: props.goal.id,
        text: value,
        isCompleted: props.goal.isCompleted,
      },
    });
    setShowModal(false);
  }

  function deleteGoal() {
    dispatch({
      type: 'DELETE',
      payload: {
        id: props.goal.id,
      },
    });
    setShowModal(false);
  }

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(!showModal);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <TextInput
              style={styles.modalText}
              value={value}
              onChangeText={setValue}
              placeholder="Enter goal"
            />
            <View style={styles.modalButtons}>
              <Pressable style={styles.button} onPress={() => save()}>
                <Text> Save</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={() => deleteGoal()}>
                <Text>Delete</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Pressable
        onPress={() =>
          dispatch({
            type: 'UPDATE',
            payload: {
              id: props.goal.id,
              text: props.goal.text,
              isCompleted: !props.goal.isCompleted,
            },
          })
        }
        onLongPress={() => setShowModal(true)}>
        <View
          style={props.goal.isCompleted ? styles.goalComplete : styles.goal}>
          <Text>{props.goal.text}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default GoalItemComponent;

const styles = StyleSheet.create({
  goalComplete: {
    margin: 8,
    padding: 8,
    backgroundColor: 'olive',
    borderRadius: 4,
  },
  goal: {
    margin: 8,
    padding: 8,
    backgroundColor: '#2c3968',
    borderRadius: 4,
  },
  modalContainer: {
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    padding: 30,
    backgroundColor: '#000',
    borderRadius: 30,
  },
  modalButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 10,
    backgroundColor: 'teal',
    padding: 16,
    alignItems: 'center',
    margin: 10,
    width: '40%',
  },
  modalText: {
    fontSize: 25,
    padding: 20,
  },
});
