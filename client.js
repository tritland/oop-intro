console.log('sourced');

class Shirt {
    constructor(size, color){
        this.size = size; // size of the shirt
        this.color = color; // color of the shirt
        
    }

fit(personShirtSize)  {
    if(this.size === personShirtSize) {
        console.log('The shirt fits!')
    } else { 
        console.log('The shirt does not fit');
    }
}  

}

let newT = new Shirt('medium', 'blue');

console.log(newT.size);
newT.fit('medium');
newT.fit('small');

