/*
Define a new class called Circle with appropriate attributes and instantiate a few Circle objects.
Write a function called circle_area that returns the area of the object.
Write a function total_sides that returns the number of sides of the object.
*/



let circletext = '<ol>' 



class Circle {

  constructor(radius,sides) {
    
    this.radius = radius;
    
    this.sides = sides;

  } // closing constructor



  circle_area() {
    let area = Math.PI * (this.radius ** 2);
    this.area = area;
    //text = text + "The area of a circle is: " + area//text + 'the area of a radius is ' + area;

  }

  total_sides(n){
    this.sides = n;
  }
  displayText(){
    circletext = circletext + "<li>" + "The area of this circle is: " + this.area + " and the number of sides is " + this.sides + "</li>";
  }
}



const cir1 = new Circle(10);
  const cir2 = new Circle(15);
    const cir3 = new Circle(20);


cir1.circle_area();
  cir1.total_sides(0);
    cir1.displayText();


  cir2.circle_area();
    cir2.total_sides(0)
      cir2.displayText();


cir3.circle_area();
  cir3.total_sides(0);
    cir3.displayText()


circletext = circletext + "</ol>"






/*
Define a new class called Rectangle with appropriate attributes and instantiate a few Rectangle objects.
Write a function called rectangle_area that returns the area of the given object.
Write a function total_sides that returns the number of sides of the object.*/




let recText = "<ol>"


class Rectangle {
  constructor(width,length,sides){
    
    this.length = length;
    
    this.width = width;
    
    this.sides = sides

  }
  rectangle_area(){
    let area = this.length * this.width;
    
    this.area = area;
  }

  total_sides(n){
    this.sides = n;
  }

  displayText2(){
    recText = recText + "<li>" + "The area of this rectange is: "  + this.area + " and the amount of sides are " + this.sides + "</li>"
  }
}
  const rec1 = new Rectangle(10,15,4)
    const rec2 = new Rectangle(15,20,4)
      const rec3 = new Rectangle(20,25,4)

      
      
    rec1.rectangle_area();
      rec1.total_sides(4);
        rec1.displayText2();



    rec2.rectangle_area();
      rec2.total_sides(4);
        rec2.displayText2();



    rec3.rectangle_area();
      rec3.total_sides(4);
        rec3.displayText2();


  recText = recText + "</ol>"





/*
Define a new class called Square with appropriate attributes and instantiate a few Square objects.
Write a function called square_area that returns the area of the given object.
Write a function total_sides that returns the number of sides of the object.
*/






let sqText = "<ol>"


class Square {
  constructor(length,sides){
    
    this.length = length;
    
    this.sides = sides;

  }
  square_area(){
    let area = this.length*this.length;
    this.area = area
  }
  total_sides(n){
    this.sides = n

  }
  displayText3(){
    sqText = sqText + "<li>"+"The area of this square is: "+ this.area +" and a square has "+ this.sides  +" sides"+ "</li>";
  }
}

const sq1 = new Square(10);
  const sq2 = new Square(15);
    const sq3 = new Square(20);


  sq1.square_area();
    sq1.total_sides(4);
      sq1.displayText3();



  sq2.square_area();
    sq2.total_sides(4)
      sq2.displayText3();



  sq3.square_area();
    sq3.total_sides(4)
      sq3.displayText3();



sqText = sqText + "</ol>"




let printheading1 = document.getElementById('circles').innerHTML = 'CIRCLE AREA';
  let data1 = document.getElementById('p1').innerHTML = circletext;



let printheading2 = document.getElementById('rectangles').innerHTML = 'RECTANGLE AREA';
  let data2 = document.getElementById('p2').innerHTML = recText;



let printheading3 = document.getElementById('squares').innerHTML = 'SQUARE AREA';
  let data3 = document.getElementById('p3').innerHTML = sqText;
