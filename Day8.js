let card="1234 4567 4789 1234";

function hideNumber(num){
    let hideCard = [];
    let star="*";
    let line="-";
    
    for(let j=0; j<num.length-4; j++){
        hideCard.push(star)
    }
    for(let i = num.length - 4; i < num.length; i++){
        hideCard.push(num[i]);
    }
    
    for(let i=4; i<num.length; i=i+5){
        index=i;
        hideCard.splice(index,3);
        return hideCard;
    }
}
console.log(hideNumber(card));