# 数据比对

```typescript
const isObject = (v: any) => typeof v === 'object' && v !== null;
const isArray = (v: any) => Array.isArray(v);
export const isEmpty = (v: any) => (v === undefined || v === null || v === '' || (Array.isArray(v) && !v.length));

const diffValue = (before: any, after: any): boolean => {
  if (isArray(before) && isArray(after)) {
    const filterBefore = before.filter((v: any) => !isEmpty(v));
    const filterAfter = after.filter((v: any) => !isEmpty(v));

    if (filterBefore.length !== filterAfter.length) {
      return true;
    }

    let isDiff = false;
    for (const key in filterBefore) {
      isDiff = diffValue(filterBefore[key], filterAfter[key]);
      if (isDiff) {
        break;
      }
    }
    return isDiff;
  } else if (isObject(before) && isObject(after)) {
    const filterBeforeKeys = Object.keys(before).filter((k: any) => !isEmpty(before[k]));
    const filterAfterKeys = Object.keys(after).filter((k: any) => !isEmpty(after[k]));

    if (filterBeforeKeys.length !== filterAfterKeys.length) {
      return true;
    }

    let isDiff = false;
    for (const key of filterBeforeKeys) {
      isDiff = diffValue(before[key], after[key]);
      if (isDiff) {
        break;
      }
    }
    return isDiff;

  } else {
    if (isEmpty(before) && isEmpty(after)) {
      return false;
    } else {
      return before !== after;
    }
  }
};

export default diffValue;
```