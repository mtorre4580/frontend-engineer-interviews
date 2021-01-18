const object = { id: 1, msg: 'hello' };
const object2 = { id: 2, msg: 'hello', before: object };

object.before = object2;

function stringifyWithCircular(object) {
    const map = new Map();
    return JSON.stringify(object, (key, value) => {
        if (typeof value === 'object' && value) {
            if (map.has(key)) {
                return;
            } else {
                map.set(key, value);
            }
        }
        return value;
    });
}

stringifyWithCircular(object);