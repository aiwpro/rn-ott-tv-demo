import { useEffect, useState } from 'react';

export type Item = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  streamUrl: string;
  duration: number;
};

export function useCatalog() {
  const [items, setItems] = useState<Item[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    (async () => {
      try {
        const data = require('../../assets/catalog.json');
        await new Promise(r => setTimeout(r, 300));
        if (!active) return;
        setItems(data.items);
      } catch (e: any) {
        if (!active) return;
        setError(e?.message ?? 'Failed to load catalog');
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  return { items, error, loading } as const;
}
