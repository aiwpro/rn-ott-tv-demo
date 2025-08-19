// Basic mocks for native modules / AV
jest.mock('expo-av', () => {
  const React = require('react');
  const { View } = require('react-native');
  return {
    Video: React.forwardRef((props, ref) => React.createElement(View, { ref, ...props })),
    ResizeMode: { CONTAIN: 'contain', COVER: 'cover' }
  };
});

// Silence RNVideo warnings in tests
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
