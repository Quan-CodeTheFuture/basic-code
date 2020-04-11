function Spot(i,grid){
    this.i = i;
    this.value = grid[i];
    this.neightbors = [];
    this.savePrevious=function(){
        if(i-1 >= 0){
            this.neightbors.push(grid[i-1]);
        }
        else{
            this.neightbors.push(undefined);
        }
    }
}
var grid = [9,3,5,6,9,10];
for(var i = 0; i < grid.length; i++){
    grid[i] = new Spot(i,grid);
}

for(var i = 0; i < grid.length; i++){
    grid[i].savePrevious();
}

var i = grid.length - 1;
console.log(grid[i].value);
var temp = grid[i].neightbors[0];

while(temp){
    console.log(temp.value);
    i-=1;
    temp = grid[i].neightbors[0];
}
