import { secondsToHMS } from '../src/utils/format';

test('secondsToHMS formats correctly', () => {
    expect(secondsToHMS(0)).toBe('00:00:00');
    expect(secondsToHMS(65)).toBe('00:01:05');
    expect(secondsToHMS(3600 + 62)).toBe('01:01:02');
});
