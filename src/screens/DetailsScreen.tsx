import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';
import { secondsToHMS } from '../utils/format';

export default function DetailsScreen({ route, navigation }: NativeStackScreenProps<RootStackParamList, 'Details'>) {
  const { item } = route.params;
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.root}>
      <Image source={{ uri: item.thumbnail }} style={styles.poster} />
      <View style={styles.meta}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.duration}>{secondsToHMS(item.duration)}</Text>
        <Text style={styles.desc}>{item.description}</Text>
        <Pressable
          focusable
          style={[styles.playBtn, focused && styles.playBtnFocused]}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onPress={() => navigation.navigate('Player', { item })}
          testID="play-button"
        >
          <Text style={styles.playText}>Play</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, flexDirection: 'row', backgroundColor: '#000', padding: 24 },
  poster: { width: 480, height: 270, borderRadius: 16 },
  meta: { flex: 1, marginLeft: 24 },
  title: { color: '#fff', fontSize: 28, marginBottom: 8 },
  duration: { color: '#bbb', marginBottom: 16 },
  desc: { color: '#ddd', fontSize: 18, marginBottom: 24 },
  playBtn: { backgroundColor: '#1f8fff', paddingHorizontal: 28, paddingVertical: 14, borderRadius: 12, alignSelf: 'flex-start' },
  playBtnFocused: { transform: [{ scale: 1.05 }], shadowColor: '#1f8fff', shadowOpacity: 0.6, shadowRadius: 8 },
  playText: { color: '#fff', fontSize: 20 }
});
