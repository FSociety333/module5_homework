let mytap = new Map();
mytap.set('key', 'prop');
mytap.set(1, 'prop2');
mytap.set(true, 123);
console.log(mytap.get(1))

console.log(mytap.keys())
console.log(mytap.values())

for (let name of mytap.values) {
	console.log(name)
}