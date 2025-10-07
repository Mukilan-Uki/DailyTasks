function areaOfCone(r,l){
    const pi=3.14159265359;
    area=(pi*r*r)+(pi*r*l)
    return area;
}

function volumeOfCone(r,h){
    const pi=3.14159265359;
    volume=1/3*pi*r*r*h
    return volume;
}

function main(){
    let rad=7;
    let slantLength=14;
    let height=10;
    console.log("Area of cone is "+areaOfCone(rad,slantLength)+"m^2");
    console.log("Volume of cone is "+volumeOfCone(rad,height)+"m^3");
}
main();