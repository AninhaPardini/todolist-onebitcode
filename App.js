import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Empty from './src/Components/Empty';
import Header from './src/Components/Header';
import Input from './src/Components/Input';
import Task from './src/Components/Task';

export default function App() {
  const [data, setData] = useState([]);

  const submitHandler = (value) => {
    /* Task anterior */
    setData((prevTask) => {
      return [
        {
          value: value,
          key: Math.random().toString(),
        },
        /* prevTask é colocado assim para que quando seja adcionado um novo objeto o novo sobreponha o antigo. */
        ...prevTask,
      ];
    });
  };

  const deleteItem = (key) => {
    setData((prevTask) => {
      return prevTask.filter((task) => task.key != key);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        ListHeaderComponent={() => <Header />}
        ListEmptyComponent={() => <Empty />}
        renderItem={({ item }) => <Task item={item} deleteItem={deleteItem} />}
      />
      <View>
        <Input submitHandler={submitHandler} />
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#313EC7',
    alignItems: 'center',
    paddingVertical: 80,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
