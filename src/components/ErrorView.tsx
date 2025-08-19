import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ErrorView({ message }: { message: string }) {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Something went wrong</Text>
      <Text style={styles.msg}>{message}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  root: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, backgroundColor: '#000' },
  title: { color: '#fff', fontSize: 22, marginBottom: 8 },
  msg: { color: '#bbb', fontSize: 16, textAlign: 'center' }
});
