import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import RootNavigator from '../src/navigation/RootNavigator';

jest.useFakeTimers();

// Integration flow: Home -> Details -> Play
it('navigates Home → Details → Player and shows Video', async () => {
    const { getByText, getByTestId } = render(<RootNavigator />);

    // Wait for catalog to load (simulated setTimeout in hook)
    jest.advanceTimersByTime(400);
    await waitFor(() => getByText('Featured'));

    // Open first tile by pressing it
    const firstTile = getByTestId('tile-bbb-hls');
    fireEvent.press(firstTile);

    // On Details, press Play
    const play = getByTestId('play-button');
    fireEvent.press(play);

    // Player should render Video
    await waitFor(() => getByTestId('video-player'));
});
