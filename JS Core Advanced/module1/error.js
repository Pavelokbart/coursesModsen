function getProperty(obj, prop) {
    try {
        return obj[prop];
    } catch (error) {
        if (error instanceof TypeError) {
            console.error('TypeError caught: ', error);
            
            
            return undefined;
        } else {
            
            throw error;
        }
    }
}

let obj = {
    name: "John",
    age: 30
};

console.log(getProperty(obj, "name")); // Должно вернуть "John"
console.log(getProperty(obj, "age")); // Должно вернуть 30
console.log(getProperty(obj, "job")); // Должно вернуть undefined, так как свойства "job" нет в объекте
console.log(getProperty(undefined, "name")); // Должно вернуть undefined и вывести ошибку TypeError в консоль, так как мы пытаемся обратиться к свойству у undefined