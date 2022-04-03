class Rectangle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getArea() {
        return this.x * this.y;
    }
}
let rectangle = new Rectangle(4, 10);
let area = rectangle.getArea();
console.log(area);
