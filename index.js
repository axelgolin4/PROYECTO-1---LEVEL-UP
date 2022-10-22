function keysAndValues(object) {
        var keys = []
        var value = []
        Object.keys(object).sort()
                .forEach(function(item, i) {
                keys.push(item);
                value.push(object[item]);
        });
        
        var result = [keys,value]
        return result;
}


console.log(keysAndValues({ d:4, f:1, a: 1, p:3, b:2, c: 3}))
console.log(keysAndValues({ a: "Apple", b:"Microsoft", c: "Google"}))
console.log(keysAndValues({ key1: true, key2: false, key3:undefined}))