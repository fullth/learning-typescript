class Rectangle {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getArea(): number { 
        return this.x * this.y;
    }
}

let rectangle = new Rectangle(4, 10);
let area = rectangle.getArea();
console.log(area);



class Shapes {
    protected name = "도형";
}
class RectangleShapes extends Shapes{
    protected getName() {
        return this.name;
    }
}
let rectangleShapes = new RectangleShapes();
// console.log(rectangleShapes.getName()); //외부 접근 불가
