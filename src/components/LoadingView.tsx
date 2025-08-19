import React from 'react';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';

export default function LoadingView({ label = 'Loading…' }: { label?: string }) {
  return (
    <View style={styles.root}>
      <ActivityIndicator size="large" />
      <Text style={styles.txt}>{label}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  root: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' },
  txt: { marginTop: 12, color: '#fff', fontSize: 18 }
});
