const user = {
    id: 1,
    name: 'Matias',
    hi: () => {
        console.log(`hello my name is ${this.name}`);
    }
}

user.hi();

// Fix
const userFix = {
    id: 1,
    name: 'Matias',
    hi: function () {
        console.log(`hello my name is ${this.name}`);
    }
}

userFix.hi();