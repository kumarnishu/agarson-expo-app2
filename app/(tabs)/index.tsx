import { Appbar } from 'react-native-paper';

export default function TabOneScreen() {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => { }} />
      <Appbar.Content title="Title" />
      <Appbar.Action icon="calendar" onPress={() => { }} />
      <Appbar.Action icon="magnify" onPress={() => { }} />
    </Appbar.Header>
  );
}


