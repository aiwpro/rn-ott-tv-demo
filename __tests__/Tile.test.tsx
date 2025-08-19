import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Tile from '../src/components/Tile';

const mockItem = {
    id: 'x',
    title: 'Demo',
    description: 'd',
    thumbnail: 'https://i.imgur.com/8GVG6Zp.jpeg',
    streamUrl: 'https://example.com/stream.m3u8',
    duration: 10
};

test('Tile renders and handles press', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(<Tile item={mockItem as any} onPress={onPress} />);
    const tile = getByTestId('tile-x');
    fireEvent.press(tile);
    expect(onPress).toHaveBeenCalledWith(mockItem);
});
