``` js
function fakeInstanceOf (instance, parent): Boolean {}

//=> true
fakeInstanceOf([], Array)

//=> true
fakeInstanceOf([], Object)

//=> true
fakeInstanceOf(x => x, Object)

//=> false
fakeInstanceOf('hello', Object)
```