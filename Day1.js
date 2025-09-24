function areaOfTriangle(base,height){
    let area=0.5*base*height;
    return area;
}

function main(){
    let base=2;
    let height=4;
    let area=areaOfTriangle(base,height);
    console.log(area);
}
main();