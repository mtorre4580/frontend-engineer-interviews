# How to avoid undefined

I have an object with a function, but is return undefined, how to resolve?

```
const user = {
    id: 1,
    name: 'Matias',
    hi: () => {
        console.log(`hello my name is ${this.name}`);
    }
}

user.hi(); // undefined
```