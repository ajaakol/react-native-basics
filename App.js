import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
 const [modalIsVisible, setModalIsVisible] = useState(false);
 const [courseGoals, setCourseGoals] = useState([]);

 function startAddGoalHandler() {
  setModalIsVisible(true);
 }

 function addGoalHandler(enteredGoalText) {
  setCourseGoals((currentCourseGoals) => [
   ...courseGoals,
   { text: enteredGoalText, id: Math.random().toString() },
  ]);
 }

 function deleteGoalHandler(id) {
  setCourseGoals((currentCourseGoals) => {
   return currentCourseGoals.filter((goal) => goal.id !== id);
  });
 }

 return (
  <View style={styles.appContainer}>
   <Button
    title='Add new goal'
    color='#5e0acc'
    onPress={startAddGoalHandler}
   />
   {modalIsVisible && (
    <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} />
   )}
   <View style={styles.goalsContainer}>
    <FlatList
     data={courseGoals}
     keyExtractor={(item, index) => {
      return item.id;
     }}
     renderItem={(itemData) => {
      return (
       <GoalItem
        text={itemData.item.text}
        id={itemData.item.id}
        onDeleteItem={deleteGoalHandler}
       />
      );
     }}
    />
   </View>
  </View>
 );
}

const styles = StyleSheet.create({
 appContainer: {
  flex: 1,
  paddingTop: 50,
  paddingHorizontal: 16,
 },
 goalsContainer: {
  flex: 5,
 },
});
