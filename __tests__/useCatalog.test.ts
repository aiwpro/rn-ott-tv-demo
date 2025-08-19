import { renderHook, waitFor } from '@testing-library/react-native';
import { useCatalog } from '../src/hooks/useCatalog';

test('useCatalog loads bundled items', async () => {
    const { result } = renderHook(() => useCatalog());
    expect(result.current.loading).toBe(true);
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.items?.length).toBeGreaterThanOrEqual(6);
});
