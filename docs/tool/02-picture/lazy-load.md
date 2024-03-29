# 图片懒加载
```js
function imgLoad(url) {
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'blob';

    request.onload = function() {
      if (request.status == 200) {
        resolve(request.response);
      } else {
        reject(Error('Image didn\'t load successfully; error code:' + request.statusText));
      }
    };

    request.onerror = function() {
      reject(Error('There was a network error.'));
    };

    request.send();
  });
}

var body = document.querySelector('body');
var myImage = new Image();

imgLoad('myLittleVader.jpg').then(function(response) {
  var imageURL = window.URL.createObjectURL(response);
  myImage.src = imageURL;
  body.appendChild(myImage);
}, function(Error) {
  console.log(Error);
});
```

使用IntersectionObserver实现图片懒加载

```js
const observer = new IntersectionObserver(function(changes) {
  changes.forEach(function(element, index) {
    if (element.intersectionRatio > 0) {
      observer.unobserve(element.target)
      element.target.src = element.target.dataset.src
    }
  })
})
function initObserver() {
  const listItem = document.querySelectorAll('img');
  listItem.forEach(function(item) {
    observer.observe(item);
  })
}
initObserver();
```