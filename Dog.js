function Dog(name){
    this.name = name;
    this.stomach = [];
    this.death=false;
}

Dog.prototype.eat = function(cat){
    this.stomach.push(cat)
}

Dog.prototype.die = function(){
    this.death = true;
}

var dog = new Dog('Milu');
dog.die();
console.log(dog.death);