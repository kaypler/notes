# 时间日期函数

## calcDays
```js
//计算两个日期相差天数,格式：yyyy-mm-dd
export function calcDays(startDateStr, endDateStr) {
    let startDate = new Date(startDateStr.replace(/-/g, '/'));
    let endDate = new Date(endDateStr.replace(/-/g, '/'));
    let restRec = Math.abs(startDate.getTime() - endDate.getTime());
    return parseInt(restRec / (24*3600*1000))+1;
}
```

## calcNaturalDays
```js
//计算两个日期相差几个月几天
export function calcNaturalDays(startDate, endDate) {
    let startDay = startDate.getDate();
    let endDay = endDate.getDate();
    let startMonth = startDate.getMonth();
    let endMonth = endDate.getMonth();
    let days = endDay - startDay + 1;
    let intervalDay = 0;
    let intervalMonth = (endDate.getFullYear()*12+endMonth) - (startDate.getFullYear()*12+startMonth);

    if (days < 0) {
        intervalMonth -= 1;
        let tempDate = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
        intervalDay = tempDate.getDate() + days;
    } else {
        if (days == getMonthDays(endDate)) {
            intervalDay = 0;
            intervalMonth += 1;
        } else {
            intervalDay = days;
        }

    }

    return [intervalMonth, intervalDay];
}
```

## formatTime
```js
// 格式化时间
export function formatTime(date, formatter = 'yyyy-MM-dd') {
    if (!date) return;

    if (typeof(date) === 'string' || typeof(date) === 'number') {
        date = new Date(date);
    }
    const o = { 
         "M+" : date.getMonth()+1,     
         "d+" : date.getDate(),     
         "h+" : date.getHours(),     
         "m+" : date.getMinutes(),    
         "s+" : date.getSeconds(),     
         "q+" : Math.floor((date.getMonth()+3)/3), 
         "S" : date.getMilliseconds()    
     }; 
     if (/(y+)/.test(formatter)) 
        formatter = formatter.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length)); 


     for (let k in o) {
        if (new RegExp("("+ k +")").test(formatter))  {
            formatter = formatter.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (o[k]+'').padStart(2, '0'));  
        }  
     }

     return formatter; 
}
```

## getMonthDays
```js
// 获取当月一共有几天
export function getMonthDays(dateArg) {
    let date = new Date(dateArg.getTime());

    date.setDate(1); //防止天数超出多加一个月
    date.setMonth(date.getMonth()+1);
    date.setDate(0);

    return date.getDate();
}
```

## parseStrToDate
```js
//将字符串格式转成日期格式
export function parseStrToDate(dateStr) {
    if (typeof(dateStr) === 'object') return dateStr;
    if (typeof(dateStr) === 'number') return new Date(dateStr);

    const regStr = dateStr.replace(/\d+/g, w => {
        return `(\\d{${w.length}})`;
    });
    const dateReg = new RegExp(regStr);

    let res = dateStr.match(dateReg);
    if (!res) return;

    res = res.slice(1);
    res[1] = parseInt(res[1])-1;

    const date = new Date(...res);
    return date;
}
```

## isToday
```js
// 判断日期是不是今天
export function isToday(str){
    var d = new Date(str.replace(/-/g,"/"));
    var todaysDate = new Date();
    if(d.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)){
        return true;
    } else {
        return false;
    }
}
```