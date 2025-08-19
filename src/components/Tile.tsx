import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import type { Item } from '../hooks/useCatalog';

export default function Tile({ item, onPress }: { item: Item; onPress: (item: Item) => void }) {
  const [focused, setFocused] = useState(false);
  return (
    <Pressable
      focusable
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onPress={() => onPress(item)}
      style={[styles.card, focused && styles.cardFocused]}
      testID={`tile-${item.id}`}
    >
      <Image source={{ uri: item.thumbnail }} style={styles.img} resizeMode="cover" />
      <View style={styles.meta}>
        <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 180,
    margin: 12,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#1b1b1b',
    borderWidth: 2,
    borderColor: 'transparent'
  },
  cardFocused: {
    transform: [{ scale: 1.04 }],
    borderColor: '#6cf'
  },
  img: { width: '100%', height: 140 },
  meta: { paddingHorizontal: 10, paddingVertical: 8 },
  title: { color: '#fff', fontSize: 16 }
});
