import { StyleSheet, View, Text } from 'react-native';
function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalItem}>{props.text}</Text>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 2,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white',
  },
  goalText: {
    color: 'white',
  },
});
