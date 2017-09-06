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

// console.log(newT.size);
// newT.fit('medium');
// newT.fit('small');

class ButtonUpShirt extends Shirt {
    constructor(size, color, buttons){
        super(size, color);
        this.buttons = buttons;
    }
}

    let TomNewShirt = new ButtonUpShirt('large', 'green', 8);

    TomNewShirt.fit('large');
    TomNewShirt.fit('small');
    console.log(TomNewShirt);