class Rectangle {
    constructor(width,height) {
      this.width = width;
      this.height = height;
    }
    getSquare()
    {
        return this.width*this.height
    }
    getPerimeter()
    {
        return  2*(this.width+this.height)
    }


}

const rectangle1 = new Rectangle(5,4)
console.log(rectangle1.getPerimeter())
console.log(rectangle1.getSquare())