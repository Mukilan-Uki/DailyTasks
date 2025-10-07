function areaOfCircle(rad){
    const pi=3.14159265359;
    area=pi*rad*rad;
    return area;
}

function perimeterOfCircle(rad){
    const pi=3.14159265359;
    perimeter=2*pi*rad;
    return perimeter;
}

function main(){
    let rad=7;
    area=areaOfCircle(rad);
    perimeter=perimeterOfCircle(rad);
    console.log("Area of the circle is "+area);
    console.log("Perimeter of the circle is "+perimeter);
}
main();