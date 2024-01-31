import {BottomNavigation, Text} from 'react-native-paper';
import {useState} from 'react';
import TodoListComponent from '../TodoList/TodoListComponent';
import WidgetComponent from '../Widgets/WidgetComponent';
import HomeComponent from '../Home/HomeComponent';

const HomeRoute = () => <HomeComponent />;
const ToDoRoute = () => <TodoListComponent />;
const WidgetsRoute = () => <WidgetComponent />;

function NavigationComponent() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'home',
      title: 'Home',
      focusedIcon: 'heart',
      unfocusedIcon: 'heart-outline',
    },
    {key: 'todo', title: 'To-Do List', focusedIcon: 'bell'},
    {key: 'widgets', title: 'Widgets', focusedIcon: 'history'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    todo: ToDoRoute,
    widgets: WidgetsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}

export default NavigationComponent;
