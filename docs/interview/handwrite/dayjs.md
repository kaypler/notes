# dayjs

dayjs 处理时区问题

```ts
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import buddhistEra from 'dayjs/plugin/buddhistEra';
import duration from 'dayjs/plugin/duration';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import isToday from 'dayjs/plugin/isToday';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import { getRegion } from './region';

import 'dayjs/locale/ms-my';
import 'dayjs/locale/pt-br';
import 'dayjs/locale/en-sg';
import 'dayjs/locale/zh-tw';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/id';
import 'dayjs/locale/vi';
import 'dayjs/locale/th';
import 'dayjs/locale/tl-ph';

dayjs.extend(customParseFormat);
dayjs.extend(buddhistEra);
dayjs.extend(duration);
dayjs.extend(advancedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isToday);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

export const timezoneMap: Record<string, string> = {
  AR: 'America/Argentina/Buenos_Aires',
  BR: 'America/Sao_Paulo',
  CL: 'America/Santiago',
  CN: 'Asia/Taipei',
  CO: 'America/Bogota',
  ES: 'Europe/Madrid',
  FR: 'Europe/Paris',
  HK: 'Asia/Taipei',
  ID: 'Asia/Jakarta',
  IN: 'Asia/Kolkata',
  KR: 'Asia/Taipei',
  MX: 'America/Mexico_City',
  MY: 'Asia/Taipei',
  PH: 'Asia/Taipei',
  PL: 'Europe/Warsaw',
  SG: 'Asia/Taipei',
  TH: 'Asia/Jakarta',
  TW: 'Asia/Taipei',
  VN: 'Asia/Jakarta',
};

export const dayjsWithTz = ((...args: any[]) => {
  const timezone = timezoneMap[getRegion()?.toUpperCase()] || timezoneMap['SG'];
  if (args.length) {
    const newArgs = [...args, timezone];
    return dayjs.tz.apply(null, newArgs as any);
  }
  return dayjs.tz(new Date(), timezone);
}) as typeof dayjs;

Object.assign(dayjsWithTz, {
  extend: dayjs.extend,
  locale: dayjs.locale,
  isDayjs: dayjs.isDayjs,
  unix: (v: number) => (typeof v === 'undefined' ? dayjsWithTz() : dayjsWithTz(v * 1000)),
  guess: dayjs.tz.guess,
  setDefault: dayjs.tz.setDefault,
  _dayjs: true,
});

export default dayjsWithTz;
```
