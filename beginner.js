function abc(){
    return new Promise.resolve(5);
}

abc().then(value => console.log(value));
