# useTablePager

```typescript
import { useState, useEffect } from 'react';

/**
 * 前端数据分页器
 * @param data 待分页数据
 * @param defaultPager 默认页码
 * @returns 分页后的数据和页码
 */
export default function useTablePager<T>(data: T[], defaultPager: { current: number; pageSize: number; total: number }) {
  const [pager, setPager] = useState(defaultPager);
  const [dataSource, setDateSource] = useState<T[]>([]);

  useEffect(() => {
    setPager({ ...defaultPager, total: data.length });
    setDateSource(data.slice((defaultPager.current || 1) - 1, defaultPager.pageSize));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const onPagerChange = (current: number, pageSize?: number) => {
    const newPager = { ...pager, current, pageSize: pageSize || pager.pageSize };
    setPager(newPager);
    setDateSource(data.slice((current - 1) * newPager.pageSize, current * newPager.pageSize));
  };

  return {
    dataSource,
    pager,
    onPagerChange,
  };
}
```