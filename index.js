// Your code here
class Polygon {
    constructor(arr){
        this.sides = arr.length
        this.perimeterN = arr.reduce((accumulator, currentValue) => accumulator + currentValue)
    }
    get countSides (){
        return this.sides
    }
    get perimeter (){
        return this.perimeterN
    }
}

class Triangle extends Polygon {
    constructor(arr){
        super(arr)
        this.side1 = arr[0];
        this.side2 = arr[1];
        this.side3 = arr[2]
    }
    get isValid (){
        if(this.side1 + this.side2 > this.side3 && this.side3 + this.side2 > this.side1 && this.side1 + this.side3 > this.side1 ){
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon{
    constructor(arr){
        super(arr)
        this.side1 = arr[0];
        this.side2 = arr[1];
        this.side3 = arr[2];
        this.side4 = arr[3]
    }
    get area (){
        return this.side1 ** 2
    }
    get isValid (){
        if (this.side1 == this.side2 && this.side1 == this.side3 && this.side1 == this.side4){
            return true
        } else {
            return false
        }
    }
}