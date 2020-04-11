function abc(){
    return Promise.resolve(5);
}

abc().then(value => console.log(value));
console.log('hello');