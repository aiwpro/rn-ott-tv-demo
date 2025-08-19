import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import Tile from './Tile';
import type { Item } from '../hooks/useCatalog';

export default function Rail({ title, items, onPress }: { title: string; items: Item[]; onPress: (item: Item) => void }) {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={items}
        horizontal
        keyExtractor={(it) => it.id}
        renderItem={({ item }) => <Tile item={item} onPress={onPress} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  root: { marginVertical: 12 },
  title: { color: '#fff', fontSize: 22, marginLeft: 12, marginBottom: 8 }
});
