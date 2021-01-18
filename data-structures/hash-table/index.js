// With a object itself
const hashTable = {};

hashTable['rolex'] = ['Submariner', 'Explorer', 'DateJust'];
hashTable['omega'] = ['Seamaster', 'Speedmaster', 'Aquaterra'];

// With a map object
const map = new Map();

map.set('rolex', ['Submariner', 'Explorer', 'DateJust']);
map.set('omega', ['Seamaster', 'Speedmaster', 'Aquaterra']);

map.get('rolex');

map.has('rolex');