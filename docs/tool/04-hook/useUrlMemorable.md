# useUrlMemorable

```typescript
import { useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export default function useUrlMemorable<ModelType>(queryKey = '_q_') {
  const history = useHistory();
  const { search } = useLocation();

  const initedRef = useRef(false);
  const urlDataRef = useRef<ModelType>();

  if (!initedRef.current) {
    const query = new URLSearchParams(search);
    try {
      if (typeof query.get(queryKey) === 'string') {
        urlDataRef.current = JSON.parse(String(query.get(queryKey)));
      }
    } catch (e) {
      console.log(e);
    }
    initedRef.current = true;
  }

  const apply = (model: ModelType) => {
    const query = new URLSearchParams(history.location.search.substring(1));

    if (typeof model !== 'object') {
      if (
        typeof model === 'string' && model.length > 0 ||
        typeof model !== 'string' && typeof model !== 'undefined' && model !== null
      ) {
        query.set(queryKey, JSON.stringify(model));
      } else {
        query.delete(queryKey);
      }
    } else {
      const filteredModel: Record<string, any> = {};
      Object.entries(model ?? {}).forEach(([key, value]) => {
        if (
          typeof value === 'string' && value.length > 0 ||
          typeof value !== 'string' && typeof value !== 'undefined' && value !== null
        ) {
          filteredModel[key] = value;
        }
      });
      Object.keys(filteredModel).length
        ? query.set(queryKey, JSON.stringify(filteredModel))
        : query.delete(queryKey);
    }

    const historyObj = {
      pathname: history.location.pathname,
      search: query.toString(),
    };
    history.replace(historyObj);
  };

  return [urlDataRef.current, apply] as const;
}
```