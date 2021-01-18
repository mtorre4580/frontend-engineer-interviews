# How to resolve circular dependency

I need to parse an object from API, but the object has a circular dependency

```

const object = { id: 1, msg: 'hello mati' };
const object2 = { id: 2, msg: 'hello mati2', before: object };

object.before = object2;

```