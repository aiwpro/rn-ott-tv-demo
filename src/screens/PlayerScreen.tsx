import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';

export default function PlayerScreen({ route }: NativeStackScreenProps<RootStackParamList, 'Player'>) {
  const { item } = route.params;
  const ref = useRef<Video | null>(null);
  const [error, setError] = useState<string | null>(null);

  return (
    <View style={styles.root}>
      {error ? (
        <Text style={styles.err}>Playback error: {error}</Text>
      ) : (
        <Video
          ref={ref}
          source={{ uri: item.streamUrl }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          shouldPlay
          style={styles.video}
          onError={(e) => setError(String(e))}
          testID="video-player"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' },
  video: { width: '100%', height: '100%' },
  err: { color: 'red', fontSize: 18 }
});
