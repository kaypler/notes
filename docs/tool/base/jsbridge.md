# JsBridge
```js
var jsbridge = {};
(function(jsbridge) {
    jsbridge.callbacks = {};//回调方法集合
    jsbridge.callbackFunction = function(data) {
        if(typeof data =='string') {
            data = JSON.parse(data);
        }
        var commandId = data.commandId;
        var cb = jsbridge.callbacks[commandId];

        if(Object.prototype.toString.call(data.data) === '[object Object]'
          && typeof data.errorCode != 'undefined') {
              data.data.errorCode = data.errorCode;
        }
        
        cb(data.data || data);
        delete jsbridge.callbacks[commandId];
    };

    //原生回调H5通用接口
    jsbridge.nativeCallH5 = function(data) { 
        
    }
    //执行
    jsbridge.excMethod = function(moduleName, actionName, params, callback) {
        var commandId = Math.floor(Math.random() * 10000);
        var data = {
            'commandId': commandId,
            'moduleName': moduleName,
            'actionName': actionName,
            'params': params
        }
        
        var src = "jsbridge://?" + JSON.stringify(data);
        // var src = "JSBridge://customeHost?" + JSON.stringify(data);

        // JSBridge://customeHost?
        console.log('Exec ' + src);

        jsbridge.callbacks[commandId] = callback;
          
        var iframe = document.createElement("IFRAME");
        iframe.setAttribute("src", src);
        document.documentElement.appendChild(iframe);
        iframe.parentNode.removeChild(iframe);
        iframe = null;
    }
})(jsbridge);
```