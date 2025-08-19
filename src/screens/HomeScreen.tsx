import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useCatalog } from '../hooks/useCatalog';
import LoadingView from '../components/LoadingView';
import ErrorView from '../components/ErrorView';
import Rail from '../components/Rail';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';

export default function HomeScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'Home'>) {
  const { items, error, loading } = useCatalog();

  if (loading) return <LoadingView label="Loading catalog…" />;
  if (error || !items) return <ErrorView message={error ?? 'Unknown error'} />;

  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.container}>
      <Rail title="Featured" items={items} onPress={(item) => navigation.navigate('Details', { item })} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#000' },
  container: { paddingVertical: 24 }
});
