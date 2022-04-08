let Color = Object.freeze({
    red: 'red', 
    green: 'green',
    blue: 'blue'
});

let Size = Object.freeze({
    small: 'small', 
    medium: 'medium',
    large: 'large'
});

class Product {
    constructor(name, color, size) {
        this.name = name;
        this.color = color;
        this.size = size;
    }
}

// Open for extension, close for modification
// extend class instead of modifying if possible. 
// in this case the product filter is replaced completely 
// by new classes.
class ProductFilter {
    constructor() {

    }
    filterByColor(products, color) {
        return products.filter(p => p.color === color);
    }
    // filterBySize(products, size) {
    //     return products.filter(p => p.size === size);
    // }
    // filterBySizeAndColor(products, size, color) {
    //     return products.filter(p => 
    //         p.size === size && p.color === color
    //     );
    // }
}

let apple = new Product('Apple', Color.green, Size.small);
let tree = new Product('Tree', Color.green, Size.large);
let house = new Product('House', Color.blue, Size.large);

let products = [apple, tree, house];

let pf = new ProductFilter();
console.log(`Green products (old):`)
for (let p of pf.filterByColor(products, Color.green)) {
    console.log(` * ${p.name} is green.`);
}

// instead of expainding the product class to add new filters
// Create new classes to perform the functionaility
class ColorSpecification {
    constructor(color) {
        this.color = color;
    }
    isSatisfied(item) {
        return item.color === this.color;
    }
}

class SizeSpecification {
    constructor(size) {
        this.size = size;
    }
    isSatisfied(item) {
        return item.size === this.size;
    }
}

class AndSpecification extends Specification {
    constructor(...specs){
        this.specs = specs;
    }
    isSatisfied(item) {
        return this.specs.every(x => x.isSatisfied(item))
    }
}

class BetterFilter{
    filter(itesm, spec) {
        return itesm.filter(x => spec.isSatisfied(x));
    }
}

let bf = new BetterFilter();
console.log('Green products (new):')
for (let p of bf.filter(products, new ColorSpecification(Color.green))) {
    console.log(` * ${p.name} is green.`);
}


let spec = new AndSpecification(
    new ColorSpecification(Color.green),
    new SizeSpecification(Size.large)
);
console.log('Large and Green objects:')
for (let p of bf.filter(products, spec)) {
    console.log(` * ${p.name} is large and green.`);
}
