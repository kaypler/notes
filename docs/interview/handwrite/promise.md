# promise
```js
class Promise {
 constructor(task) {
  this.status="pending"
  this.value=undefined
  this.reason=undefined
  this.fulfilled_callbacks=[]
  this.rejected_callbacks=[]

  try {
   task(this._resolve,this._reject)
  } catch (error) {
   this._reject(error)
  }
 }
 then(onFulfilled,onRejected){
  if (this.status==='fulfilled') {
   let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
     try {
      if (!this._isFunction(onFulfilled)) {
       resolve(this.value)
      } else {
       this._resolvePromise(promise2,onFulfilled(this.value))
      }
     } catch (error) {
      reject(error)
     }
    },0)
   })
   return promise2
  } else if (this.status==='rejected') {
   let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
     try {
      if (!this._isFunction(onRejected)) {
       reject(this.reason)
      } else {
       this._resolvePromise(promise2,onRejected(this.reason))
      }
     } catch (error) {
      reject(error)
     }
    },0)
   })
   return promise2
  } else if (this.status==='pending')  {
   let promise2=new Promise((resolve,reject)=>{
    this.fulfilled_callbacks.push(()=>{
     try {
      if (!this._isFunction(onFulfilled)) {
       resolve(this.value)
      } else {
       this._resolvePromise(promise2,onFulfilled(this.value))
      }
     } catch (error) {
      reject(error)
     }
    })
    this.rejected_callbacks.push(()=>{
     try {
      if (!this._isFunction(onRejected)) {
       reject(this.reason)
      } else {
       this._resolvePromise(promise2,onRejected(this.reason))
      }
     } catch (error) {
      reject(error)
     }
    })
   })
   return promise2
  }
 }
 catch=onRejected=>this.then(null,onRejected)

 finally=onFinished=>this.then(onFinished,onFinished)

 static deferred(){
  let deferred={}
  deferred.promise=new Promise((resolve,reject)=>{
   deferred.resolve=resolve
   deferred.reject=reject
  })
  return deferred
 }
 static resolve(value) {
  if (value instanceof Promise) return value
  return new Promise(resolve=>resolve(value))
 }
 static reject=reason=>{return new Promise((resolve, reject)=>reject(reason))}

 static all(promiseList) {
  return new Promise((resolve,reject)=>{
   if (promiseList.length===0) return resolve([])
   let result=[],count=0

   promiseList.forEach((promise,index)=>{
    Promise.resolve(promise).then(value=>{
     result[index]=value
     if (++count===promiseList.length) resolve(result)
    },reason=>reject(reason))
   })
  })
 }
 static race(promiseList) {
  return new Promise((resolve,reject)=>{
   if (promiseList.length===0) return resolve()
   promiseList.forEach(promise=>{
    Promise.resolve(promise)
     .then(value=>resolve(value),reason=>reject(reason))
   })
  })
 }
 static allSettled(promiseList) {
  return new Promise(resolve=>{
   let result=[],count=0
   if (len===0) return resolve(result)

   promiseList.forEach((promise,i)=>{
    Promise.resolve(promise).then(value=>{
     result[i]={
      status:'fulfilled',
      value:value
     }
     if (++count===promiseList.length) resolve(result)
    },reason=>{
     result[i]={
      status:'rejected',
      reason:reason
     }
     if (++count===promiseList.length) resolve(result)
    })
   })
  })
 }
 _resolve=value=>{
  if (this.status!=='pending') return
  setTimeout(()=>{
   this.status ='fulfilled'
   this.value = value
   this.fulfilled_callbacks.forEach(cb=>cb(this.value))
  },0)
 }
 _reject=reason=>{
  if (this.status!=='pending') return
  setTimeout(()=>{
   this.reason = reason
   this.status ='rejected'
   this.rejected_callbacks.forEach(cb=>cb(this.reason))
  },0)
 }
 _isFunction=f=>Object.prototype.toString.call(f).toLocaleLowerCase()==='[object function]'
 
 _isObject=o=>Object.prototype.toString.call(o).toLocaleLowerCase()==='[object object]'

 _resolvePromise(promise,x){
  if (promise===x) {
      promise._reject(new TypeError('cant be the same'))
      return
  }
  if (x instanceof Promise) {
   if (x.status==='fulfilled') {
    promise._resolve(x.value)
   } else if (x.status==='rejected') {
    promise._reject(x.reason)
   } else if (x.status==='pending') {
    x.then(value=>{
     this._resolvePromise(promise,value)
    },reason=>{
     promise._reject(reason)
    })
   }
   return
  }
  if (this._isObject(x)||this._isFunction(x)) {
   let then
   try {
    then=x.then
   } catch (error) {
    promise._reject(error)
    return
   }
   if (this._isFunction(then)) {
    let called=false
    try {
     then.call(x,value=>{
      if (called) return
      called=true
      this._resolvePromise(promise,value)
     },reason=>{
      if (called) return
      called=true
      promise._reject(reason)
     })
    } catch (error) {
     if (called) return
     promise._reject(error)
    }
   } else {
    promise._resolve(x)
   }
  } else {
   promise._resolve(x)
  }
 }
}
module.exports = Promise
```